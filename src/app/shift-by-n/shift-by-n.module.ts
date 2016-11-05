import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShiftByNComponent} from "./shift-by-n.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ShiftByNService} from "./shift-by-n.service";
import {Routes, RouterModule} from "@angular/router";
import {CorrespondencesModule} from "../correspondences/correspondences.module";

@NgModule({
    imports: [
        CommonModule,
        OptionsPanelModule,
        FormsModule,
        ReactiveFormsModule,
        UtilPipesModule,
        CorrespondencesModule,
        RouterModule.forChild([{
            path: '',
            component: ShiftByNComponent,
        }])
    ],
    declarations: [
        ShiftByNComponent,
    ],
    providers: [
        ShiftByNService,
    ],
    exports: [
        ShiftByNComponent,
    ],
})
export class ShiftByNModule {
}
