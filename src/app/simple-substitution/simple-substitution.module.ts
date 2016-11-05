import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SimpleSubstitutionComponent} from "./simple-substitution.component";
import {SimpleSubstitutionService} from "./simple-substitution.service";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ReactiveFormsModule} from "@angular/forms";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {LetterifyModule} from "../letterify/letterify.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        UtilPipesModule,
        LetterifyModule,
    ],
    declarations: [
        SimpleSubstitutionComponent,
    ],
    providers: [
        SimpleSubstitutionService,
    ],
    exports: [
        SimpleSubstitutionComponent,
    ],
})
export class SimpleSubstitutionModule {
}
