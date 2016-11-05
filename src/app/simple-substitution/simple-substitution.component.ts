import {Component, OnInit} from "@angular/core";
import {Observable, BehaviorSubject} from "rxjs";
import {FormControl} from "@angular/forms";
import {SimpleSubstitutionService} from "./simple-substitution.service";

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
    public ciphertext$: Observable<string> = Observable
        .combineLatest(
            this.plaintext.valueChanges.startWith(this.plaintext.value),
            this.key.valueChanges.startWith(this.key.value)
        )
        .map(value => {
            const plaintext = value[0];
            const key = this.simpleSubstitution.parseMap(value[1]);
            const ciphertext = this.simpleSubstitution.encrypt(plaintext, key);
            return ciphertext;
        });

    public alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    public mappedAlphabet$: Observable<string> = this.key.valueChanges
        .startWith(this.key.value)
        .map(string => this.simpleSubstitution.parseMap(string))
        .map(key => this.simpleSubstitution.encrypt(this.alphabet, key));

    public currentHighlightIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

    public currentHighlightedAlphabetIndex: Observable<number> = Observable.combineLatest(
        this.plaintext.valueChanges.startWith(this.plaintext.value),
        this.currentHighlightIndex$
    )
        .map(values => Object.assign({}, {plaintext: values[0], index: values[1]}))
        .map(v => {
            return this.alphabet.indexOf(v.plaintext[v.index]);
        });

    constructor(public simpleSubstitution: SimpleSubstitutionService) {
    }

    ngOnInit() {
    }

}
