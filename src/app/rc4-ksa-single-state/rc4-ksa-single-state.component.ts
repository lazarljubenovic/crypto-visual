import {Component, OnInit, Input} from "@angular/core";
import {Rc4KsaState} from "../rc4-ksa/rc4-ksa.interface";

@Component({
    selector: 'crv-rc4-ksa-single-state',
    templateUrl: './rc4-ksa-single-state.component.html',
    styleUrls: ['./rc4-ksa-single-state.component.scss']
})
export class Rc4KsaSingleStateComponent implements OnInit {

    @Input()
    public state: Rc4KsaState;

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
