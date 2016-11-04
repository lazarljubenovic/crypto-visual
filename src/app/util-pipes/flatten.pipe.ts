import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'flatten'
})
export class FlattenPipe implements PipeTransform {

    transform(value: any[][]): any[] {
        return value ? value.reduce((acc, curr) => acc.concat(curr), []) : [];
    }

}
