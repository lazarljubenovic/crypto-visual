import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatrixComponent} from "./matrix.component";
import {MatrixWithLabelPipe} from "./matrix-with-label.pipe";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MatrixComponent,
        MatrixWithLabelPipe,
    ],
    exports: [
        MatrixComponent,
    ],
})
export class MatrixModule {
}
