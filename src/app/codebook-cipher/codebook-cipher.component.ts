import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {CodebookCipherService} from "./codebook-cipher.service";

@Component({
    selector: 'crv-codebook-cipher',
    templateUrl: './codebook-cipher.component.html',
    styleUrls: ['./codebook-cipher.component.scss']
})
export class CodebookCipherComponent implements OnInit {

    public codebook = new FormControl(`at => 8cnd5dp03
dawn => 9ii 
attack => 1t9cd
`);

    public plaintext = new FormControl(`attack at dawn`);
    public ciphertext$: Observable<string> = Observable.combineLatest(
        this.plaintext.valueChanges
            .startWith(this.plaintext.value)
            .debounceTime(100)
            .distinctUntilChanged(),
        this.codebook.valueChanges
            .startWith(this.codebook.value)
            .debounceTime(100)
            .distinctUntilChanged())
        .map(values => {
            const plaintext = values[0];
            const codebook = values[1];
            const ciphertext = this.codebookCipher.encrypt(plaintext, codebook);
            return ciphertext;
        });

    constructor(public codebookCipher: CodebookCipherService) {
    }

    ngOnInit() {
    }

}
