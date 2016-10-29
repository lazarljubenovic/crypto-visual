import {Component, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {CodebookCipherService} from "../codebook-cipher.service";

@Component({
    selector: 'crv-codebook-cypher',
    templateUrl: './codebook-cypher.component.html',
    styleUrls: ['./codebook-cypher.component.scss']
})
export class CodebookCypherComponent implements OnInit {

    public codebook = new FormControl(`attack => 1t9cd
at => 8cnd5dp03
dawn => 9ii 
`);

    public plaintext = new FormControl(`attack at dawn`);
    public ciphertext$: Observable<string>;

    public keys$: Observable<string[]>;
    public values$: Observable<string[]>;
    public map$: Observable<string[][]>;

    constructor(public codebookCipher: CodebookCipherService) {
    }

    ngOnInit() {
        this.ciphertext$ = Observable.combineLatest(
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
                console.log(ciphertext);
                return ciphertext;
            });

        this.map$ = this.codebook.valueChanges
            .startWith(this.codebook.value)
            .debounceTime(100)
            .distinctUntilChanged()
            .map(map => this.codebookCipher.parseMap(map))
            .map(map => Array.from(map));
    }

}
