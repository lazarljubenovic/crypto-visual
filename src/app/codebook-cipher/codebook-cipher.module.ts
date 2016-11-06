import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CodebookCipherService} from "./codebook-cipher.service";
import {CodebookCipherComponent} from "./codebook-cipher.component";
import {ArrayModule} from "../array/array.module";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VisualisationModule,
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
