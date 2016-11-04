import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

    @Input()
    public memoryDump: number[] = [];

    @Input()
    public highlightRanges: number[][] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
