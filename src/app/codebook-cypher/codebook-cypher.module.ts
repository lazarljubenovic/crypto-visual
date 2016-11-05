import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CodebookCypherComponent} from "./codebook-cypher.component";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
    ],
    declarations: [
        CodebookCypherComponent,
    ],
    exports: [
        CodebookCypherComponent,
    ],
})
export class CodebookCypherModule {
}
