import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {

    @Input()
    public memoryDump: number[] = [0x12, 0x34, 0x5678, 0x9, 0xAAAA, 0xBBB, 0xCC, 0xD, 0x1111, 0x2222, 0x3333, 0x4444, 0x5555, 0x6666, 0x7777, 0x8888, 0x9999];

    @Input()
    public highlightRanges: number[][] = [[0x08, 0x0A], [0x12, 0x17]];

    constructor() {
    }

    ngOnInit() {
    }

}
