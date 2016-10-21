import {Injectable} from "@angular/core";

function positiveMod(a: number, b: number): number {
    return ((a % b) + b) % b;
}

const aCode = "a".charCodeAt(0);
const abcLength = 26;

@Injectable()
export class ShiftByNService {

    private _encryptDecrypt(encrypt: boolean, plaintext: string, key: number): string {
        return plaintext
            .replace(/\s+/g, '')
            .split('')
            .map(letter =>
                String.fromCharCode(
                    positiveMod((letter.charCodeAt(0) - aCode + (encrypt ? (+key) : (-key))), abcLength) + aCode))
            .join('');
    }

    public encrypt(plaintext: string, key: number): string {
        return this._encryptDecrypt(true, plaintext, key);
    }

    public decrypt(plaintext: string, key: number): string {
        return this._encryptDecrypt(false, plaintext, key);
    }

    constructor() {
    }

}
