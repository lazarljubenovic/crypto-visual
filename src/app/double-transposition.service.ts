import {Injectable} from "@angular/core";

@Injectable()
export class DoubleTranspositionService {

    public inversePremutation(permutation: number[]): number[] {
        return permutation.map((_, i) => permutation.map(Number).indexOf(i));
    }

    public stripDown(string: string): string {
        return string.replace(/[^\w]/gi, '');
    }

    public rightPadding(string: string, pad: string, multiplier: number): string {
        const targetLength: number = string.length + multiplier - ((string.length - 1) % multiplier + 1);
        let resultString: string = string;
        while (resultString.length < targetLength) resultString = resultString.concat(pad);
        return resultString.slice(0, targetLength);
    }

    public toMatrix(plaintext: string, rows: number, cols: number): string[][] {
        let splitPlaintext = this.rightPadding(plaintext, plaintext, rows * cols).split('');
        let array: string[][] = [];
        for (let i = 0, j = splitPlaintext.length; i < j; i += cols) {
            array = array.concat([splitPlaintext.slice(i, i + cols)]);
        }
        return array;
    }

    public permuteRows(matrix: string[][], permutation: number[]): string[][] {
        return matrix.map((_, i) => matrix[permutation[i]]);
    }

    public permuteColumns(matrix: string[][], permutation: number[]): string[][] {
        return matrix.map((_, i) => _.map((_, j) => matrix[i][permutation[j]]));
    }

    public encrypt(plaintext: string,
                   rowFirst: boolean,
                   permutation1: number[],
                   permutation2: number[]): string {
        const matrix = this.toMatrix(
            plaintext,
            rowFirst ? permutation1.length : permutation2.length,
            rowFirst ? permutation2.length : permutation1.length
        );
        return (rowFirst ?
            this.permuteColumns(this.permuteRows(matrix, permutation1), permutation2) :
            this.permuteRows(this.permuteColumns(matrix, permutation1), permutation2))
            .map(row => row.join('')).join('');

    }

    constructor() {
    }

}
