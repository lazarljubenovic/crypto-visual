import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CodebookCipherService} from "./codebook-cipher.service";
import {CodebookCipherComponent} from "./codebook-cipher.component";
import {ArrayModule} from "../array/array.module";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
        UtilPipesModule,
        ArrayModule,
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
