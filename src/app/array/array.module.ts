import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArrayComponent} from "./array.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ArrayComponent,
    ],
    exports: [
        ArrayComponent,
    ],
})
export class ArrayModule {
}
