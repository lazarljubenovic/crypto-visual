import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ShiftByNComponent} from "./shift-by-n/shift-by-n.component";
import {ShiftByNService} from "./shift-by-n.service";
import { SplitPipe } from './split.pipe';
import { BottomLinksComponent } from './bottom-links/bottom-links.component';

@NgModule({
    declarations: [
        AppComponent,
        ShiftByNComponent,
        SplitPipe,
        BottomLinksComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    providers: [
        ShiftByNService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
