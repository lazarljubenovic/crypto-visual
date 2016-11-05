import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Rs4PrgaComponent} from "./rs4-prga.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {Rc4PrgaSingleStateComponent} from "./rc4-prga-single-state/rc4-prga-single-state.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OptionsPanelModule,
    ],
    declarations: [
        Rs4PrgaComponent,
        Rc4PrgaSingleStateComponent,
    ],
    exports: [
        Rs4PrgaComponent,
    ]
})
export class Rs4PrgaModule {
}
