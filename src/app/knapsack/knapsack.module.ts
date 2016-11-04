import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {KnapsackComponent} from "./knapsack.component";
import {TableModule} from "../table/table.module";
import {CorrespondencesModule} from "../correspondences/correspondences.module";
import {MemoryModule} from "../memory/memory.module";
import {AsciiTextModule} from "../ascii-text/ascii-text.module";
import {OptionsPanelModule} from "../options-panel/options-panel.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArrayModule} from "../array/array.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        CorrespondencesModule,
        MemoryModule,
        AsciiTextModule,
        OptionsPanelModule,
        ArrayModule,
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
