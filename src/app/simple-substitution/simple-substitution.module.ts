import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SimpleSubstitutionComponent} from "./simple-substitution.component";
import {SimpleSubstitutionService} from "./simple-substitution.service";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CorrespondencesModule} from "../correspondences/correspondences.module";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UtilPipesModule,
        VisualisationModule,
        CorrespondencesModule,
        RouterModule.forChild([{
            path: '',
            component: SimpleSubstitutionComponent,
        }])
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
