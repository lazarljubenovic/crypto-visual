import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-rc4-prga-single-state',
    templateUrl: 'rc4-prga-single-state.component.html',
    styleUrls: ['rc4-prga-single-state.component.scss']
})
export class Rc4PrgaSingleStateComponent implements OnInit {

    @Input()
    public state: any;

    public initPermutation(length: number) {
        if (!length) return [];
        length = 2 ** length;
        return Array(length).fill(0).map((_, i) => i);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
