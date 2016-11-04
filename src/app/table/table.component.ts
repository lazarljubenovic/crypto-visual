import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input()
    public data: any[][] = [[]];

    @Input()
    public rowLabels: string[];

    @Input()
    public colLabels: string[];

    @Input()
    public highlights: number[][] = [];

    private dataIndexToMatrixIndex(position: number[]): number[] {
        let result: number[] = position.concat();
        if (this.rowLabels) {
            result[0]++;
        }
        if (this.colLabels) {
            result[1]++;
        }
        return result;
    }

    private matrixIndexToDataIndex(position: number[]): number[] {
        let result: number[] = position.concat();
        if (this.rowLabels) {
            result[0]--;
        }
        if (this.colLabels) {
            result[1]--;
        }
        return result;
    }

    public isHighlighted(position: number[]): boolean {
        position = this.matrixIndexToDataIndex(position);
        return !!this.highlights.find(el => el[0] == position[0] && el[1] == position[1]);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
