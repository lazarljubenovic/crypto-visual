import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'mapNumber'
})
export class MapNumberPipe implements PipeTransform {

    transform(value: any[]): number[] {
        return value.map(Number);
    }

}
