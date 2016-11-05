import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'min'
})
export class MinPipe implements PipeTransform {

    transform(arr: any[]): any {
        return Math.max(...arr);
    }

}
