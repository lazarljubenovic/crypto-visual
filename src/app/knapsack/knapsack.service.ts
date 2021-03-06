import {Injectable} from "@angular/core";
import * as _ from "lodash";

@Injectable()
export class KnapsackService {

    public getPublicKey(superincreasing: number[], modulo: number, multiplier: number): number[] {
        return superincreasing.map(p => p * multiplier % modulo);
    }

    public encryptBlockArray(plaintext: number[], publicKey: number[]): number[] {
        return plaintext.map((m, i) => m * publicKey[i]);
    }

    public encryptBlock(plaintext: number[], publicKey: number[]): number {
        return this.encryptBlockArray(plaintext, publicKey).reduce((acc, curr) => acc + curr, 0);
    }

    public encrypt(plaintext: string, publicKey: number[]): number[] {
        return plaintext
            .split('').map(letter => letter.charCodeAt(0))
            .map(p => _.padStart(p.toString(2), 8, '0').split('').map(Number))
            .map(block => this.encryptBlock(block, publicKey));
    }

    public getPrivateKey(multiplier: number, modulo: number): number {
        for (let q = 0; q < multiplier; q++) {
            let im = (q * modulo + 1) / multiplier;
            if (im == Math.floor(im)) {
                return im;
            }
        }
    }

    public getTransformedCiphertext(ciphertext: number, privateKey: number, modulo: number): number {
        return ciphertext * privateKey % modulo;
    }

    constructor() {
    }

}
