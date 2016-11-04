import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MemoryComponent} from "./memory.component";
import {TableModule} from "../table/table.module";
import {MemoryPipe} from "./memory.pipe";
import {HighlightsPipe} from "./highlights.pipe";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {LabelPipe} from "./label.pipe";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        UtilPipesModule,
    ],
    declarations: [
        MemoryComponent,
        MemoryPipe,
        HighlightsPipe,
        LabelPipe,
    ],
    exports: [
        MemoryComponent,
    ]
})
export class MemoryModule {
}
