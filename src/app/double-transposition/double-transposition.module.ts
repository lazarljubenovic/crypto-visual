import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DoubleTranspositionComponent} from "./double-transposition.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {LetterifyModule} from "../letterify/letterify.module";
import {MatrixModule} from "../matrix/matrix.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        UtilPipesModule,
        LetterifyModule,
        MatrixModule,
    ],
    declarations: [
        DoubleTranspositionComponent,
    ],
    exports: [
        DoubleTranspositionComponent,
    ]
})
export class DoubleTranspositionModule {
}
