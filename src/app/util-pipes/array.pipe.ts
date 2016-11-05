import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'array'
})
export class ArrayPipe implements PipeTransform {

    transform(value: any): any [] {
        return value ? Array.from(value) : [];
    }

}
