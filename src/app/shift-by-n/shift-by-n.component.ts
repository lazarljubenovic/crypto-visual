import {Component, OnInit, OnDestroy} from "@angular/core";
import {Observable} from "rxjs";
import {ShiftByNService} from "../shift-by-n.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'crv-shift-by-n',
    templateUrl: './shift-by-n.component.html',
    styleUrls: ['./shift-by-n.component.scss']
})
export class ShiftByNComponent implements OnInit {

    public key = new FormControl(3);
    public plaintext = new FormControl('attackatdawn');
    public ciphertext: Observable<string>;

    public alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    public shiftedAlphabet: Observable<string[]>;

    public currentHighlightIndex: number = -1;

    constructor(public shiftByN: ShiftByNService) {
    }

    ngOnInit() {
        this.ciphertext = Observable
            .combineLatest(
                this.plaintext.valueChanges.startWith(this.plaintext.value),
                this.key.valueChanges.startWith(this.key.value)
            )
            //.debounceTime(200)
            .distinctUntilChanged((x, y) => (x[0] == y[0] && x[1] == y[1]))
            .map(value => {
                const plaintext = value[0];
                const key = value[1];
                const ciphertext = this.shiftByN.encrypt(plaintext, key);
                console.log(`${plaintext} => ${ciphertext}`);
                return ciphertext;
            });

        this.shiftedAlphabet = this.key.valueChanges
            .startWith(this.key.value)
            //.debounceTime(200)
            .distinctUntilChanged()
            .map(key => this.shiftByN.encrypt(this.alphabet.join(''), key).split(''));
    }

    public highlightLetter(index: number) {
        this.currentHighlightIndex = index;
    }

    public unhighlightLetter(index: number) {
        this.currentHighlightIndex = -1;
    }

}
