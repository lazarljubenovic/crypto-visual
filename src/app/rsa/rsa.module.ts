import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RsaComponent} from "./rsa.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {VisualisationModule} from "../visualisation/visualisation.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VisualisationModule,
        UtilPipesModule,
        RouterModule.forChild([{
            path: '',
            component: RsaComponent,
        }]),
    ],
    declarations: [
        RsaComponent,
    ],
    exports: [
        RsaComponent,
    ],
})
export class RsaModule {
}
