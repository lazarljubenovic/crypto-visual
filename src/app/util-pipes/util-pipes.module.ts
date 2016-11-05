import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LengthPipe} from "./length.pipe";
import {FlattenPipe} from "./flatten.pipe";
import {MaxPipe} from "./max.pipe";
import {MinPipe} from "./min.pipe";
import {ArrayPipe} from "./array.pipe";
import {BinaryPipe} from "./binary.pipe";
import {PadStartPipe} from "./pad-start.pipe";
import {MapNumberPipe} from "./map-number.pipe";
import {TransposePipe} from "./transpose.pipe";
import {SpaceToNbspPipe} from "./space-to-nbsp.pipe";
import {GetPipe} from "./get.pipe";
import {HexadecimalPipe} from "./hexadecimal.pipe";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LengthPipe,
        FlattenPipe,
        MaxPipe,
        MinPipe,
        ArrayPipe,
        BinaryPipe,
        PadStartPipe,
        MapNumberPipe,
        TransposePipe,
        SpaceToNbspPipe,
        GetPipe,
        HexadecimalPipe,
    ],
    exports: [
        LengthPipe,
        FlattenPipe,
        MaxPipe,
        MinPipe,
        ArrayPipe,
        BinaryPipe,
        PadStartPipe,
        MapNumberPipe,
        TransposePipe,
        SpaceToNbspPipe,
        GetPipe,
        HexadecimalPipe,
    ],
})
export class UtilPipesModule {
}
