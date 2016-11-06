import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoubleTranspositionComponent} from "./double-transposition.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {RouterModule} from "@angular/router";
import {DoubleTranspositionService} from "./double-transposition.service";
import {ArrayModule} from "../array/array.module";
import {TableModule} from "../table/table.module";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VisualisationModule,
        UtilPipesModule,
        ArrayModule,
        TableModule,
        RouterModule.forChild([{
            path: '',
            component: DoubleTranspositionComponent,
        }])
    ],
    declarations: [
        DoubleTranspositionComponent,
    ],
    exports: [
        DoubleTranspositionComponent,
    ],
    providers: [
        DoubleTranspositionService,
    ],
})
export class DoubleTranspositionModule {
}
