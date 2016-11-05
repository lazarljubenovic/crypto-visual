import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'transpose'
})
export class TransposePipe implements PipeTransform {

    transform(matrix: number[][]): number[][] {
        return matrix[0].map((x, i) => matrix.map(x => x[i]));
    }

}
