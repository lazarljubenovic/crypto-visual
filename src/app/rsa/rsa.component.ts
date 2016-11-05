import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

interface Inputs {
    p: number;
    q: number;
    e: number;
}

@Component({
    selector: 'crv-rsa',
    templateUrl: './rsa.component.html',
    styleUrls: ['./rsa.component.scss']
})
export class RsaComponent implements OnInit {

    public p = new FormControl(17);
    public q = new FormControl(31);
    public e = new FormControl(13);

    public M = new FormControl(101);
    public C = new FormControl(218);

    public inputs$: Observable<Inputs> = Observable.combineLatest(
        this.p.valueChanges.startWith(this.p.value),
        this.q.valueChanges.startWith(this.q.value),
        this.e.valueChanges.startWith(this.e.value)
    ).map(values => ({p: values[0], q: values[1], e: values[2]}));

    public n$: Observable<number> = this.inputs$.map(v => v.p * v.q);
    public phiN$: Observable<number> = this.inputs$.map(v => (v.p - 1) * (v.q - 1));

    public d$: Observable<number> = Observable.combineLatest(this.inputs$, this.phiN$)
        .map(v => Object.assign({}, v[0], {phiN: v[1]}))
        .map(v => {
            for (let q = 0; q < v.phiN; q++) {
                const d = (q * v.phiN + 1) / v.e;
                if (Math.floor(d) == d) {
                    return d;
                }
            }
            //throw (`Impossible`);
            console.warn(`Impossible`, v);
            return NaN;
        });

    public encryption$: Observable<number> = Observable.combineLatest(
        this.M.valueChanges.startWith(this.M.value),
        this.inputs$,
        this.n$
    )
        .map(v => ({M: v[0], e: v[1].e, n: v[2]}))
        .map(v => {
            let encryptionResult: number = 1;
            for (let i = 0; i < v.e; i++) {
                encryptionResult = (encryptionResult * v.M) % v.n;
            }
            return encryptionResult;
        });

    public decryption$: Observable<number> = Observable.combineLatest(
        this.C.valueChanges.startWith(this.C.value),
        this.d$,
        this.n$
    )
        .map(v => ({C: v[0], d: v[1], n: v[2]}))
        .map(v => {
            let decryptionResult: number = 1;
            for (let i = 0; i < v.d; i++) {
                decryptionResult = (decryptionResult * v.C) % v.n;
            }
            return decryptionResult;
        });

    constructor() {
    }

    ngOnInit() {
    }

}
