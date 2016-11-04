import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CorrespondencesComponent} from "./correspondences.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CorrespondencesComponent,
    ],
    exports: [
        CorrespondencesComponent,
    ]
})
export class CorrespondencesModule {
}
