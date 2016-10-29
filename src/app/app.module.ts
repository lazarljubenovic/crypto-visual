import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ShiftByNComponent} from "./shift-by-n/shift-by-n.component";
import {ShiftByNService} from "./shift-by-n.service";
import {SplitPipe} from "./split.pipe";
import {BottomLinksComponent} from "./bottom-links/bottom-links.component";
import {OptionsPanelComponent} from "./options-panel/options-panel.component";
import {SimpleSubstitutionComponent} from "./simple-substitution/simple-substitution.component";
import {SimpleSubstitutionService} from "./simple-substitution.service";
import {CodebookCypherComponent} from "./codebook-cypher/codebook-cypher.component";
import {CodebookCipherService} from "./codebook-cipher.service";
import {DoubleTranspositionComponent} from "./double-transposition/double-transposition.component";
import {DoubleTranspositionService} from "./double-transposition.service";
import { MatrixComponent } from './matrix/matrix.component';
import { MatrixWithLabelPipe } from './matrix-with-label.pipe';
import { LetterifyComponent } from './letterify/letterify.component';

@NgModule({
    declarations: [
        AppComponent,
        ShiftByNComponent,
        SplitPipe,
        BottomLinksComponent,
        OptionsPanelComponent,
        SimpleSubstitutionComponent,
        CodebookCypherComponent,
        DoubleTranspositionComponent,
        MatrixComponent,
        MatrixWithLabelPipe,
        LetterifyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    providers: [
        ShiftByNService,
        SimpleSubstitutionService,
        CodebookCipherService,
        DoubleTranspositionService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
