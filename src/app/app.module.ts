import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ShiftByNService} from "./shift-by-n/shift-by-n.service";
import {BottomLinksComponent} from "./bottom-links/bottom-links.component";
import {SimpleSubstitutionService} from "./simple-substitution/simple-substitution.service";
import {CodebookCipherService} from "./codebook-cypher/codebook-cipher.service";
import {DoubleTranspositionService} from "./double-transposition/double-transposition.service";
import {KnapsackModule} from "./knapsack/knapsack.module";
import {OptionsPanelModule} from "./options-panel/options-panel.module";
import {RsaModule} from "./rsa/rsa.module";
import {ShiftByNModule} from "./shift-by-n/shift-by-n.module";
import {SimpleSubstitutionModule} from "./simple-substitution/simple-substitution.module";
import {DoubleTranspositionModule} from "./double-transposition/double-transposition.module";
import {CodebookCypherModule} from "./codebook-cypher/codebook-cypher.module";
import {Rc4KsaModule} from "./rc4-ksa/rc4-ksa.module";
import {Rs4PrgaModule} from "./rs4-prga/rs4-prga.module";

@NgModule({
    declarations: [
        AppComponent,
        BottomLinksComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ShiftByNModule,
        SimpleSubstitutionModule,
        CodebookCypherModule,
        DoubleTranspositionModule,
        Rc4KsaModule,
        Rs4PrgaModule,
        RsaModule,
        KnapsackModule,
        OptionsPanelModule,
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
