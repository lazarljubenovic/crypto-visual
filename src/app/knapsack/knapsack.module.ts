import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {KnapsackComponent} from "./knapsack.component";
import {TableModule} from "../table/table.module";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
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
