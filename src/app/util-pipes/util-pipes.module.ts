import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LengthPipe} from "./length.pipe";
import {FlattenPipe} from "./flatten.pipe";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LengthPipe,
        FlattenPipe,
    ],
    exports: [
        LengthPipe,
        FlattenPipe,
    ]
})
export class UtilPipesModule {
}
