import {Component, OnInit, Input} from "@angular/core";
import {KnapsackService} from "../knapsack.service";

@Component({
    selector: 'crv-ciphertext-block-calculation',
    templateUrl: './ciphertext-block-calculation.component.html',
    styleUrls: ['./ciphertext-block-calculation.component.scss']
})
export class CiphertextBlockCalculationComponent implements OnInit {

    @Input()
    public mask: number;

    @Input()
    public publicKey: number[];

    public cipherArray(mask: number[], publicKey: number[]): number[] {
        return this.algorithm.encryptBlockArray(mask, publicKey);
    }

    public ciphertext(mask: number[], publicKey: number[]): number {
        return this.algorithm.encryptBlock(mask, publicKey);
    }

    constructor(private algorithm: KnapsackService) {
    }

    ngOnInit() {
    }

}
