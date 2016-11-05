import {Component, OnInit} from "@angular/core";
import {DoubleTranspositionService} from "./double-transposition.service";
import {FormControl} from "@angular/forms";
import {Observable, Subject} from "rxjs";

interface DoubleTranspositionInputs {
    plaintext: string;
    rowsFirst: boolean;
    permutation1: number[];
    permutation2: number[];
}

@Component({
    selector: 'crv-double-transposition',
    templateUrl: './double-transposition.component.html',
    styleUrls: ['./double-transposition.component.scss']
})
export class DoubleTranspositionComponent implements OnInit {

    public plaintext = new FormControl(`attackatdawn`);
    public rowsFirst = new FormControl(false);
    public permutation1 = new FormControl('1-3-0-2');
    public permutation2 = new FormControl('2-0-1');

    public inputs$: Observable<DoubleTranspositionInputs> = Observable.combineLatest(
        this.plaintext.valueChanges.startWith(this.plaintext.value).debounceTime(100),
        this.rowsFirst.valueChanges.startWith(this.rowsFirst.value).debounceTime(100),
        this.permutation1.valueChanges.startWith(this.permutation1.value).debounceTime(100),
        this.permutation2.valueChanges.startWith(this.permutation2.value).debounceTime(100)
    ).map(values => ({
        plaintext: values[0],
        rowsFirst: values[1],
        permutation1: values[2].split('-').map(Number),
        permutation2: values[3].split('-').map(Number),
    }));

    public afterTransformingToMatrix$: Observable<string[][]>;
    public afterFirstPermutation$: Observable<string[][]>;
    public afterSecondPermutation$: Observable<string[][]>;
    public ciphertext$: Observable<string>;


    public permutation0RowLabels$: Observable<number[]> = this.inputs$
        .map(values => Array(values.rowsFirst ?
            values.permutation1.length :
            values.permutation2.length).fill(null).map((_, i) => i));
    public permutation0ColLabels$: Observable<number[]> = this.inputs$
        .map(values => Array(values.rowsFirst ?
            values.permutation2.length :
            values.permutation1.length).fill(null).map((_, i) => i));

    public permutation1RowLabels$: Observable<number[]> = this.inputs$
        .map(values => values.rowsFirst ?
            values.permutation1 :
            Array(values.permutation1.length).fill(null).map((_, i) => i));
    public permutation1ColLabels$: Observable<number[]> = this.inputs$
        .map(values => !values.rowsFirst ?
            values.permutation1 :
            Array(values.permutation2.length).fill(null).map((_, i) => i));

    public permutation2RowLabels$: Observable<number[]> = this.inputs$
        .map(values => values.rowsFirst ? values.permutation1 : values.permutation2);
    public permutation2ColLabels$: Observable<number[]> = this.inputs$
        .map(values => values.rowsFirst ? values.permutation2 : values.permutation1);

    public onHighlightFromPlaintext(index: number) {
        this.plaintextHighlightIndex$.next(index);
    }

    public onHighlightFromCipherText(index: number) {
        // TODO
    }

    public plaintextHighlightIndex$: Subject<number> = new Subject<number>();

    public cellPositionMatrix0$: Observable<number[]> = this.plaintextHighlightIndex$
        .map(index => {
            const rows = !this.rowsFirst.value ?
                this.permutation1.value.split('-').length :
                this.permutation2.value.split('-').length;
            return [Math.floor(index / rows), index % rows];
        });

    public cellPositionMatrix1$: Observable<number[]> = this.cellPositionMatrix0$
        .map(cellPosition => {
            const inversePermutation =
                this.doubleTransposition.inversePremutation(this.permutation1.value.split('-'));
            return [
                !this.rowsFirst ? inversePermutation[cellPosition[0]] : cellPosition[0],
                !this.rowsFirst ? cellPosition[1] : inversePermutation[cellPosition[1]],
            ];
        });

    public cellPositionMatrix2$: Observable<number[]> = this.cellPositionMatrix1$
        .map(cellPosition => {
            const inversePermutation =
                this.doubleTransposition.inversePremutation(this.permutation2.value.split('-'));
            return [
                this.rowsFirst ? inversePermutation[cellPosition[0]] : cellPosition[0],
                this.rowsFirst ? cellPosition[1] : inversePermutation[cellPosition[1]],
            ];
        });

    public ciphertextHighlightIndex$: Observable<number> = this.cellPositionMatrix2$
        .map(cellPosition => {
            const length = !this.rowsFirst.value ?
                this.permutation1.value.split('-').length :
                this.permutation2.value.split('-').length;
            return cellPosition[0] * (length) + cellPosition[1];
        });

    constructor(public doubleTransposition: DoubleTranspositionService) {
    }

    ngOnInit() {
        this.afterTransformingToMatrix$ = this.inputs$
            .map(values => {
                return this.doubleTransposition.toMatrix(
                    values.plaintext,
                    values.rowsFirst ? values.permutation1.length : values.permutation2.length,
                    values.rowsFirst ? values.permutation2.length : values.permutation1.length
                );
            });

        this.afterFirstPermutation$ = this.inputs$
            .map(values => {
                const matrix = this.doubleTransposition.toMatrix(
                    values.plaintext,
                    values.rowsFirst ? values.permutation1.length : values.permutation2.length,
                    values.rowsFirst ? values.permutation2.length : values.permutation1.length
                );
                return values.rowsFirst ?
                    this.doubleTransposition.permuteRows(matrix, values.permutation1) :
                    this.doubleTransposition.permuteColumns(matrix, values.permutation1);
            });

        this.afterSecondPermutation$ = this.inputs$
            .map(values => {
                const matrix = this.doubleTransposition.toMatrix(
                    values.plaintext,
                    values.rowsFirst ? values.permutation1.length : values.permutation2.length,
                    values.rowsFirst ? values.permutation2.length : values.permutation1.length
                );
                const intermediateMatrix = values.rowsFirst ?
                    this.doubleTransposition.permuteRows(matrix, values.permutation1) :
                    this.doubleTransposition.permuteColumns(matrix, values.permutation1);
                return values.rowsFirst ?
                    this.doubleTransposition.permuteColumns(intermediateMatrix, values.permutation2) :
                    this.doubleTransposition.permuteRows(intermediateMatrix, values.permutation2);
            });

        this.ciphertext$ = this.inputs$
            .map(values => {
                return this.doubleTransposition.encrypt(
                    values.plaintext,
                    values.rowsFirst,
                    values.permutation1,
                    values.permutation2
                );
            });
    }

}
