import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {KnapsackComponent} from "./knapsack.component";
import {TableModule} from "../table/table.module";
import {CorrespondencesModule} from "../correspondences/correspondences.module";
import {MemoryModule} from "../memory/memory.module";
import {AsciiTextModule} from "../ascii-text/ascii-text.module";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        CorrespondencesModule,
        MemoryModule,
        AsciiTextModule,
    ],
    declarations: [
        KnapsackComponent,
    ],
    exports: [
        KnapsackComponent,
    ]
})
export class KnapsackModule {
}
