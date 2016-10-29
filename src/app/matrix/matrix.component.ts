import {Component, OnInit, Input} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Component({
    selector: 'crv-matrix',
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

    @Input()
    public matrix: string[][];

    @Input()
    public rowLabels: string[];

    @Input()
    public colLabels: string[];

    @Input()
    public highlight: number[] = [-1, -1];

    constructor() {
    }

    ngOnInit() {
    }

}
