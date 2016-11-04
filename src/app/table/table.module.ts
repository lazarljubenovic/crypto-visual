import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./table.component";
import { GetMatrixPipe } from './get-matrix.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TableComponent, GetMatrixPipe],
    exports: [
        TableComponent,
    ]
})
export class TableModule {
}
