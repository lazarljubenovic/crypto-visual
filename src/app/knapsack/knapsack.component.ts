import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {KnapsackService} from "./knapsack.service";

interface Inputs {
    superincreasing: number[];
    modulo: number;
    multiplier: number;
    plaintext: string;
}

@Component({
    selector: 'crv-knapsack',
    templateUrl: './knapsack.component.html',
    styleUrls: ['./knapsack.component.scss']
})
export class KnapsackComponent implements OnInit {

    public plaintext: FormControl = new FormControl(`Attack at dawn!`);
    public multiplier: FormControl = new FormControl(41);
    public modulo: FormControl = new FormControl(491);
    public superincreasing: FormControl = new FormControl(`2 3 7 14 30 57 120 251`);

    public currentLetterIndex: number = 0;

    public superincreasing$: Observable<number[]> = this.superincreasing.valueChanges
        .startWith(this.superincreasing.value)
        .map(string => string.split(' ').map(Number));

    public asciiPlaintext$: Observable<number[]> = this.plaintext.valueChanges
        .startWith(this.plaintext.value)
        .map(plaintext => plaintext.split('').map(letter => letter.charCodeAt(0)));

    public inputs$: Observable<Inputs> = Observable.combineLatest(
        this.superincreasing$,
        this.modulo.valueChanges.startWith(this.modulo.value),
        this.multiplier.valueChanges.startWith(this.multiplier.value),
        this.plaintext.valueChanges.startWith(this.plaintext.value)
    ).map(values => (<Inputs>{
        superincreasing: values[0],
        modulo: values[1],
        multiplier: values[2],
        plaintext: values[3],
    }));

    public publicKey$: Observable<number[]> = this.inputs$.map(v => {
        return this.algorithm.getPublicKey(v.superincreasing, v.modulo, v.multiplier);
    });

    public ciphertext$: Observable<number[]> = Observable.combineLatest(this.inputs$, this.publicKey$)
        .map(v => {
            const inputs: Inputs = v[0];
            const publicKey: number[] = v[1];
            return this.algorithm.encrypt(inputs.plaintext, publicKey);
        });

    constructor(private algorithm: KnapsackService) {
    }

    ngOnInit() {
    }

}
