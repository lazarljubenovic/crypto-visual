import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'hexadecimal'
})
export class HexadecimalPipe implements PipeTransform {

    transform(value: number): string {
        return value ? value.toString(16) : '';
    }

}
