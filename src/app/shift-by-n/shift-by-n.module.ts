import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShiftByNComponent} from "./shift-by-n.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ShiftByNService} from "./shift-by-n.service";

@NgModule({
    imports: [
        CommonModule,
        OptionsPanelModule,
        FormsModule,
        ReactiveFormsModule,
        UtilPipesModule,
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
