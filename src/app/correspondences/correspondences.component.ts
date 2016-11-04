import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'crv-correspondences',
    templateUrl: './correspondences.component.html',
    styleUrls: ['./correspondences.component.scss']
})
export class CorrespondencesComponent implements OnInit {

    @Input()
    public data: any[][] = 'abcdefghijklmnopqrstuvwxyz'.split('')
        .map(letter => [letter.charCodeAt(0).toString(2), letter].reverse());

    @Input()
    public highlight: number = 4;

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
