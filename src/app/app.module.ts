import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BottomLinksComponent} from "./bottom-links/bottom-links.component";
import {RouterModule} from "@angular/router";

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
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/shift-by-n',
                pathMatch: 'full'
            },
            {
                path: 'shift-by-n',
                loadChildren: './shift-by-n/shift-by-n.module#ShiftByNModule',
            },
            {
                path: 'simple-substitution',
                loadChildren: './simple-substitution/simple-substitution.module#SimpleSubstitutionModule',
            },
            {
                path: 'codebook-cipher',
                loadChildren: './codebook-cipher/codebook-cipher.module#CodebookCipherModule',
            },
            {
                path: 'double-transposition',
                loadChildren: './double-transposition/double-transposition.module#DoubleTranspositionModule',
            },
            {
                path: 'rc4-ksa',
                loadChildren: './rc4-ksa/rc4-ksa.module#Rc4KsaModule',
            },
            {
                path: 'rc4-prga',
                loadChildren: './rs4-prga/rs4-prga.module#Rs4PrgaModule',
            },
            {
                path: 'rsa',
                loadChildren: './rsa/rsa.module#RsaModule',
            },
            {
                path: 'knapsack',
                loadChildren: './knapsack/knapsack.module#KnapsackModule',
            },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
