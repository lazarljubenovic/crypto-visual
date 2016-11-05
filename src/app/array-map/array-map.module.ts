import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArrayMapComponent} from "./array-map.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";

@NgModule({
    imports: [
        CommonModule,
        UtilPipesModule,
    ],
    declarations: [
        ArrayMapComponent,
    ],
    exports: [
        ArrayMapComponent,
    ],
})
export class ArrayMapModule {
}
