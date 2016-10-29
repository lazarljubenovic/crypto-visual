import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'matrixWithLabel'
})
export class MatrixWithLabelPipe implements PipeTransform {

    transform(matrix: string[][], colLabels: string[], rowLabels: string[]): any {
        if (matrix && colLabels && rowLabels) {
            return [['', ...colLabels], ...matrix.map((row, index) => [rowLabels[index], ...row])];
        }
        else {
            return [];
        }
    }

}
