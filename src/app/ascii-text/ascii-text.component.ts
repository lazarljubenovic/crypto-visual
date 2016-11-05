import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-ascii-text',
    templateUrl: './ascii-text.component.html',
    styleUrls: ['./ascii-text.component.scss']
})
export class AsciiTextComponent implements OnInit {

    @Input()
    public data;

    @Input()
    public highlightIndex;

    @Input()
    public base: number = 16;

    @Output()
    public focus: EventEmitter<number> = new EventEmitter<number>();

    public focus$(index: number): void {
        this.focus.emit(index);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
