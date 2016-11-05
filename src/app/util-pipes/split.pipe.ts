import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {

    transform(value: string): string[] {
        return value ? value.split('') : [];
    }

}
