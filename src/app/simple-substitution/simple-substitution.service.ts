import {Injectable} from "@angular/core";

@Injectable()
export class SimpleSubstitutionService {

    public parseMap(string: string): Map<string, string> {
        return <any>new Map(string.split('\n')
            .map(row => <any>row.split('=>').map(letter => letter.trim())));
    }

    private _encryptDecrypt(plaintext: string, key: Map<string, string>): string {
        return plaintext
            .replace(/\s+/g, '')
            .split('')
            .map(letter => key.get(letter))
            .join('');
    }

    public getInverseKey(map: Map<string, string>): Map<string, string> {
        let reverseMap: Map<string, string> = new Map();
        map.forEach((key, value) => reverseMap.set(value, key));
        return reverseMap;
    }

    public encrypt(plaintext: string, key: Map<string, string>): string {
        return this._encryptDecrypt(plaintext, key);
    }

    public decrypt(plaintext: string, key: Map<string, string>): string {
        const inverseKey: Map<string, string> = this.getInverseKey(key);
        return this._encryptDecrypt(plaintext, inverseKey);
    }

    constructor() {
    }

}
