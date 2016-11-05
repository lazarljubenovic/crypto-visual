import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'max'
})
export class MaxPipe implements PipeTransform {

    transform(arr: any[]): any {
        return Math.max(...arr);
    }

}
