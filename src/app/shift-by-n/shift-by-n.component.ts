import {Component, OnInit} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {ShiftByNService} from "./shift-by-n.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'crv-shift-by-n',
    templateUrl: './shift-by-n.component.html',
    styleUrls: ['./shift-by-n.component.scss']
})
export class ShiftByNComponent implements OnInit {

    public key = new FormControl(3);
    public plaintext = new FormControl('attackatdawn');
    public ciphertext$: Observable<string> = Observable
        .combineLatest(
            this.plaintext.valueChanges.startWith(this.plaintext.value),
            this.key.valueChanges.startWith(this.key.value)
        )
        .map(value => {
            const plaintext = value[0];
            const key = value[1];
            const ciphertext = this.shiftByN.encrypt(plaintext, key);
            return ciphertext;
        });

    public alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    public shiftedAlphabet$: Observable<string[]> = this.key.valueChanges
        .startWith(this.key.value)
        .map(key => this.shiftByN.encrypt(this.alphabet.join(''), key).split(''));

    public currentHighlightIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

    public currentHighlightedAlphabetIndex: Observable<number> = Observable.combineLatest(
        this.plaintext.valueChanges.startWith(this.plaintext.value),
        this.currentHighlightIndex$
    )
        .map(values => Object.assign({}, {plaintext: values[0], index: values[1]}))
        .map(v => {
            return this.alphabet.indexOf(v.plaintext[v.index]);
        });

    constructor(public shiftByN: ShiftByNService) {
    }

    ngOnInit() {
    }

}
