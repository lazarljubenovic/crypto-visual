import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {VisualisationComponent} from "./visualisation.component";
import {PlaygroundComponent} from "./playground/playground.component";
import {OptionsPanelComponent} from "./options-panel/options-panel.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        VisualisationComponent,
        PlaygroundComponent,
        OptionsPanelComponent,
    ],
    exports: [
        VisualisationComponent,
        PlaygroundComponent,
        OptionsPanelComponent,
    ],
})
export class VisualisationModule {
}
