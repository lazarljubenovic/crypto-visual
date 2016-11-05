import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Rc4KsaComponent} from "./rc4-ksa.component";
import {Rc4KsaSingleStateComponent} from "./rc4-ksa-single-state/rc4-ksa-single-state.component";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
    ],
    declarations: [
        Rc4KsaComponent,
        Rc4KsaSingleStateComponent
    ],
    exports: [
        Rc4KsaComponent,
    ]
})
export class Rc4KsaModule {
}
