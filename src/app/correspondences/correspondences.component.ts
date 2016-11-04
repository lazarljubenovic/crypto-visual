import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-correspondences',
    templateUrl: './correspondences.component.html',
    styleUrls: ['./correspondences.component.scss']
})
export class CorrespondencesComponent implements OnInit {

    @Input()
    public data: any[][] = [];

    @Input()
    public highlight: number;

    @Output()
    public focus: EventEmitter<{index: number, data: any}> = new EventEmitter<any>();

    public focus$(index: number): {index: number, data: any} {
        const eventData = {
            index,
            data: this.data[index],
        };
        this.focus.emit(eventData);
        return eventData;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
