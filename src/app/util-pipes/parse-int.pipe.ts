import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'parseInt'
})
export class ParseIntPipe implements PipeTransform {

    transform(string: string, radix: number = 10): number {
        return Number.parseInt(string, radix);
    }

}
