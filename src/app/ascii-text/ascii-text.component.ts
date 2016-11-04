import {Component, OnInit, Input} from "@angular/core";

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

    constructor() {
    }

    ngOnInit() {
    }

}
