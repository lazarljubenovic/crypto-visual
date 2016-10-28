import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {SimpleSubstitutionService} from "../simple-substitution.service";

@Component({
    selector: 'crv-simple-substitution',
    templateUrl: './simple-substitution.component.html',
    styleUrls: ['../shift-by-n/shift-by-n.component.scss']
})
export class SimpleSubstitutionComponent implements OnInit {

    public key = new FormControl(
        `q => a
w => s
e => d
r => f
t => g
y => h
u => j
i => k
o => l
p => p
a => z
s => x
d => c
f => v
g => b
h => n
j => m
k => k
l => l
z => q
x => w
c => e
v => r
b => t
n => y
m => u`);
    public plaintext = new FormControl('attackatdawn');
    public ciphertext: Observable<string>;

    public alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    public mappedAlphabet: Observable<string[]>;

    public currentHighlightIndex: number = -1;

    constructor(public simpleSubstitution: SimpleSubstitutionService) {
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
                const key = this.simpleSubstitution.parseMap(value[1]);
                const ciphertext = this.simpleSubstitution.encrypt(plaintext, key);
                console.log(`${plaintext} => ${ciphertext}`);
                return ciphertext;
            });

        this.mappedAlphabet = this.key.valueChanges
            .startWith(this.key.value)
            //.debounceTime(200)
            .distinctUntilChanged()
            .map(string => this.simpleSubstitution.parseMap(string))
            .map(key => this.simpleSubstitution.encrypt(this.alphabet.join(''), key).split(''));
    }

    public highlightLetter(index: number) {
        this.currentHighlightIndex = index;
    }

    public unhighlightLetter(index: number) {
        this.currentHighlightIndex = -1;
    }

}
