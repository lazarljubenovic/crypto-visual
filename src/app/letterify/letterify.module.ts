import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LetterifyComponent} from "./letterify.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";

@NgModule({
    imports: [
        CommonModule,
        UtilPipesModule,
    ],
    declarations: [
        LetterifyComponent,
    ],
    exports: [
        LetterifyComponent,
    ]
})
export class LetterifyModule {
}
