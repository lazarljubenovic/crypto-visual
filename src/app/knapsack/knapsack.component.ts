import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector: 'crv-knapsack',
    templateUrl: './knapsack.component.html',
    styleUrls: ['./knapsack.component.scss']
})
export class KnapsackComponent implements OnInit {

    public plaintext: FormControl = new FormControl(`We'll be attacking them at dawn. ` +
        `They must never find out about it.`);
    public multiplier: FormControl = new FormControl(39);
    public modulo: FormControl = new FormControl(194);
    public superincreasing: FormControl = new FormControl(`2 6 9 21 46 99`);

    public superincreasing$: Observable<number[]> = this.superincreasing.valueChanges
        .startWith(this.superincreasing.value)
        .map(string => string.split(' ').map(Number));

    public asciiPlaintext$: Observable<number[]> = this.plaintext.valueChanges
        .startWith(this.plaintext.value)
        .map(plaintext => plaintext.split('').map(letter => letter.charCodeAt(0)));

    public publicKey$: Observable<number[]> = Observable.combineLatest(
        this.superincreasing$,
        this.modulo.valueChanges.startWith(this.modulo.value),
        this.multiplier.valueChanges.startWith(this.multiplier.value)
    )
        .map(values => {
            const superincreasing: number[] = values[0];
            const modulo: number = values[1];
            const multiplier: number = values[2];
            console.log(values);
            return superincreasing.map(p => p * multiplier % modulo);
        });

    constructor() {
    }

    ngOnInit() {
    }

}
