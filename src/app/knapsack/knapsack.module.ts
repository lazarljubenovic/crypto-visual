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
import {ArrayMapModule} from "../array-map/array-map.module";
import {CiphertextBlockCalculationComponent} from "./ciphertext-block-calculation/ciphertext-block-calculation.component";
import {UtilPipesModule} from "../util-pipes/util-pipes.module";
import {KnapsackService} from "./knapsack.service";
import { DecryptionBlockCalculationComponent } from './decryption-block-calculation/decryption-block-calculation.component';

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
        ArrayMapModule,
        UtilPipesModule,
    ],
    declarations: [
        KnapsackComponent,
        CiphertextBlockCalculationComponent,
        DecryptionBlockCalculationComponent,
    ],
    providers: [
        KnapsackService,
    ],
    exports: [
        KnapsackComponent,
    ]
})
export class KnapsackModule {
}
