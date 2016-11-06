import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Rs4PrgaComponent} from "./rs4-prga.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {Rc4PrgaSingleStateComponent} from "./rc4-prga-single-state/rc4-prga-single-state.component";
import {RouterModule} from "@angular/router";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VisualisationModule,
        RouterModule.forChild([{
            path: '',
            component: Rs4PrgaComponent,
        }]),
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
