import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShiftByNComponent} from "./shift-by-n.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ShiftByNService} from "./shift-by-n.service";
import {RouterModule} from "@angular/router";
import {CorrespondencesModule} from "../correspondences/correspondences.module";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VisualisationModule,
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
