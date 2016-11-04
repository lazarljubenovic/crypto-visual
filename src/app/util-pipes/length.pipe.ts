import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'length'
})
export class LengthPipe implements PipeTransform {

    transform(value: any): any {
        return value ? value.length : 0;
    }

}
