import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import * as _ from 'lodash';

@Component({
    selector: 'crv-rs4-prga',
    templateUrl: './rs4-prga.component.html',
    styleUrls: ['./rs4-prga.component.scss']
})
export class Rs4PrgaComponent implements OnInit {

    public plaintext = new FormControl('110011010001');
    public permutation = new FormControl('6 2 5 4 0 3 1 7');

    public inputs$ = Observable.combineLatest(
        this.plaintext.valueChanges.startWith(this.plaintext.value),
        this.permutation.valueChanges.startWith(this.permutation.value)
    )
        .map(values => {
            const plaintextBinaryString: string = values[0];
            const permutation: number[] = values[1].split(' ').map(Number);
            const numberOfBits = Math.floor(Math.log2(permutation.length));
            const plaintext: number[] = _.chunk(plaintextBinaryString.split(''), numberOfBits)
                //.map(x => {console.log(x); return x})
                .map(chunk => chunk.join(''))
                //.map(x => {console.log(x); return x})
                .map(chunk => Number.parseInt(chunk, 2))
                //.map(x => {console.log(x); return x});
            console.log(plaintext);
            return {
                permutation,
                numberOfBits,
                plaintext
            };
        });

    private initialState$: Observable<any> = this.inputs$
        .map(values => {
            return {
                n: values.numberOfBits,
                i: 0,
                j: 0,
                S: values.permutation,
                historyS: values.permutation.map(x => [x]),
                jExpression: {
                    previousJ: '',
                    sI: '',
                },
                xor1: values.plaintext,
                xor2: [],
                result: [],
            }
        });

    private getNextState(previousState: any): any {
        const n = previousState.n;
        const i = (previousState.i + 1) % (2 ** n);
        let S = previousState.S.concat();
        const j = (previousState.j + S[i]) % (2 ** n);
        const jExpression = {
            previousJ: previousState.j.toString(),
            sI: S[i].toString(),
        };
        [S[i], S[j]] = [S[j], S[i]];
        const historyS = previousState.historyS.map((arr, i) => {
            if (S[i] == arr[arr.length - 1]) {
                return arr;
            } else {
                return arr.concat(S[i]);
            }
        });
        const xor1 = previousState.xor1;
        const xor2 = previousState.xor2.concat(S[(S[i] + S[j]) % (2 ** n)]);
        const index = xor2.length - 1;
        const result = previousState.result.concat(xor1[index] ^ xor2[index]);
        return {n, i, j, S, historyS, jExpression, xor1, xor2, result};
    }

    public states$: Observable<any[]> = this.initialState$
        .map(initialState => {
            let states: any[] = [initialState];
            for (let iteration = 1; iteration <= initialState.xor1.length; iteration++) {
                states = states.concat(this.getNextState(states[iteration - 1]));
            }
            return states;
        });

    public currentState = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
