import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CodebookCypherComponent} from "./codebook-cypher.component";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CodebookCipherService} from "./codebook-cipher.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        RouterModule.forChild([{
            path: '',
            component: CodebookCypherComponent,
        }])
    ],
    declarations: [
        CodebookCypherComponent,
    ],
    exports: [
        CodebookCypherComponent,
    ],
    providers: [
        CodebookCipherService,
    ]
})
export class CodebookCypherModule {
}
