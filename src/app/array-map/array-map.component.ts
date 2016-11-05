import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-array-map',
    templateUrl: './array-map.component.html',
    styleUrls: ['./array-map.component.scss']
})
export class ArrayMapComponent implements OnInit {

    @Input()
    public original: any[];

    @Input()
    public mapped: any[];

    @Input()
    public align: 'left' | 'center' | 'right' = 'center';

    constructor() {
    }

    ngOnInit() {
    }

}
