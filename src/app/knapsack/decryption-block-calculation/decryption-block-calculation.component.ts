import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'crv-decryption-block-calculation',
    templateUrl: './decryption-block-calculation.component.html',
    styleUrls: ['./decryption-block-calculation.component.scss']
})
export class DecryptionBlockCalculationComponent implements OnInit {

    @Input()
    public transformedCipher: number;

    @Input()
    public superincreasing: number[];

    private _decrypt(): {arr: number[], res: number[]} {
        let tc = this.transformedCipher;
        let res: number[] = [];
        const arr = this.superincreasing.reduceRight((acc, curr, i) => {
            if (tc >= curr) {
                tc -= curr;
                res = res.concat(1);
            } else {
                res = res.concat(0);
            }
            return acc.concat(tc);
        }, []).reverse().concat(this.transformedCipher);
        res = res.reverse();
        return {arr, res};
    }

    public get decreasingArray(): number[] {
        return this._decrypt().arr;
    }

    public get plaintext(): number[] {
        return this._decrypt().res;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
