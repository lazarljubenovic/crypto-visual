import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'getMatrix'
})
export class GetMatrixPipe implements PipeTransform {

    transform(matrix: any[][], rowLabels?: string[], colLabels?: string[]): any[][] {
        let result: any[][] = matrix;
        if (rowLabels) {
            result = result.map((row, i) => [rowLabels[i], ...row]);
        }
        if (colLabels) {
            if (rowLabels) {
                result = [['', ...colLabels], ...result];
            } else {
                result = [colLabels, ...result];
            }
        }
        return result;
    }

}
