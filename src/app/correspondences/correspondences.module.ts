import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CorrespondencesComponent} from "./correspondences.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";

@NgModule({
    imports: [
        CommonModule,
        UtilPipesModule,
    ],
    declarations: [
        CorrespondencesComponent,
    ],
    exports: [
        CorrespondencesComponent,
    ],
})
export class CorrespondencesModule {
}
