import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OptionsPanelComponent} from "./options-panel.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        OptionsPanelComponent,
    ],
    exports: [
        OptionsPanelComponent,
    ],
})
export class OptionsPanelModule {
}
