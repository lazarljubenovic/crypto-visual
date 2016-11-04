import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-array',
    templateUrl: './array.component.html',
    styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

    @Input()
    public data: any[];

    @Output()
    public mouseover: EventEmitter<number> = new EventEmitter<number>();

    public mouseover$(index) {
        this.mouseover.emit(index);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
