import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-letterify',
    templateUrl: './letterify.component.html',
    styleUrls: ['./letterify.component.scss']
})
export class LetterifyComponent implements OnInit {

    @Input()
    public word: string;

    @Input('highlight')
    public highlightedLetter: number = -1;

    @Output()
    public highlight: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

}
