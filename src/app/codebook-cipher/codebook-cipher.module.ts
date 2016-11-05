import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CodebookCipherService} from "./codebook-cipher.service";
import {CodebookCipherComponent} from "./codebook-cipher.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        RouterModule.forChild([{
            path: '',
            component: CodebookCipherComponent,
        }])
    ],
    declarations: [
        CodebookCipherComponent,
    ],
    exports: [
        CodebookCipherComponent,
    ],
    providers: [
        CodebookCipherService,
    ]
})
export class CodebookCipherModule {
}
