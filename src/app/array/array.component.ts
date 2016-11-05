import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-array',
    templateUrl: './array.component.html',
    styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

    @Input()
    public data: any[];

    @Input()
    public highlight: number = -1;

    @Output()
    public focus: EventEmitter<number> = new EventEmitter<number>();

    public focus$(index) {
        this.focus.emit(index);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
