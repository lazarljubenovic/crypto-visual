import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {

    transform(value: string, separator: string = ''): string[] {
        return value ? value.split(separator) : [];
    }

}
