import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import * as _ from "lodash";
import {Observable} from "rxjs";
import {Rc4KsaState} from "./rc4-ksa.interface";

interface Inputs {
    numberOfBits: number;
    key: string[];
}

@Component({
    selector: 'crv-rc4-ksa',
    templateUrl: './rc4-ksa.component.html',
    styleUrls: ['./rc4-ksa.component.scss']
})
export class Rc4KsaComponent implements OnInit {

    public numberOfBits = new FormControl(3);
    public binaryKey = new FormControl('111010000100');

    public inputs$: Observable<Inputs> = Observable.combineLatest(
        this.numberOfBits.valueChanges.startWith(this.numberOfBits.value),
        this.binaryKey.valueChanges.startWith(this.binaryKey.value)
    ).map(values => ({
        numberOfBits: values[0],
        binaryKey: values[1],
    })).map(values => {
        const numberOfBits: number = values.numberOfBits;
        const binaryKey: string = values.binaryKey;
        let key: string[] = _.chunk(binaryKey.split(''), numberOfBits).map(chunk => chunk.join(''));
        key[key.length - 1] = _.padEnd(key[key.length - 1], numberOfBits, '0');
        return {numberOfBits, key};
    });

    private initialState$: Observable<Rc4KsaState> = this.inputs$
        .map(values => {
            return {
                n: values.numberOfBits,
                key: values.key,
                i: -1,
                j: 0,
                S: Array(2 ** values.numberOfBits).fill(0).map((_, i) => i),
                historyS: Array(2 ** values.numberOfBits).fill(0).map((_, i) => i).map(x => [x]),
                jExpression: {
                    previousJ: '',
                    sI: '',
                    keyI: '',
                },
            }
        });

    private getNextState(previousState: Rc4KsaState): Rc4KsaState {
        const n = previousState.n;
        const key = previousState.key;
        const i = previousState.i + 1;
        let S = previousState.S.concat();
        const j = (previousState.j + S[i] + Number.parseInt(key[i % key.length], 2)) % (2 ** n);
        const jExpression = {
            previousJ: previousState.j.toString(),
            sI: S[i].toString(),
            keyI: Number.parseInt(key[i % key.length], 2).toString(),
        };
        [S[i], S[j]] = [S[j], S[i]];
        const historyS = previousState.historyS.map((arr, i) => {
            if (S[i] == arr[arr.length - 1]) {
                return arr;
            } else {
                return arr.concat(S[i]);
            }
        });
        return {n, key, i, j, S, historyS, jExpression};
    }

    public states$: Observable<Rc4KsaState[]> = this.initialState$
        .map(initialState => {
            let states: Rc4KsaState[] = [initialState];
            for (let iteration = 1; iteration <= 2 ** initialState.n; iteration++) {
                states = states.concat(this.getNextState(states[iteration - 1]));
            }
            return states;
        });

    public currentState = new FormControl(8);

    public powerOfTwo(n: number) {
        return 2 ** n;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
