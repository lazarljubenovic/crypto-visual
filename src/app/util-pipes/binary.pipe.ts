import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'binary'
})
export class BinaryPipe implements PipeTransform {

    transform(value: number): string {
        return value ? value.toString(2) : '';
    }

}
