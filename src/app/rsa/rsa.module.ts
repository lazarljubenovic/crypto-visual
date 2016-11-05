import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RsaComponent} from "./rsa.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        OptionsPanelModule,
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
