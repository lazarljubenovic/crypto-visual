import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AsciiTextComponent} from "./ascii-text.component";
import {CorrespondencesModule} from "../correspondences/correspondences.module";
import { AsciiPipe } from './ascii.pipe';

@NgModule({
    imports: [
        CommonModule,
        CorrespondencesModule,
    ],
    declarations: [
        AsciiTextComponent,
        AsciiPipe,
    ],
    exports: [
        AsciiTextComponent,
    ]
})
export class AsciiTextModule {
}
