import {Component, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
    selector: 'crv-options-panel',
    template: `<ng-content></ng-content>`,
    styleUrls: ['options-panel.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class OptionsPanelComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
