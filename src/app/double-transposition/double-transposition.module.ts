import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoubleTranspositionComponent} from "./double-transposition.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {LetterifyModule} from "../letterify/letterify.module";
import {MatrixModule} from "../matrix/matrix.module";
import {RouterModule} from "@angular/router";
import {DoubleTranspositionService} from "./double-transposition.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        UtilPipesModule,
        LetterifyModule,
        MatrixModule,
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
