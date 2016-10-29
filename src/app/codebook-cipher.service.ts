import {Injectable} from "@angular/core";

@Injectable()
export class CodebookCipherService {

    public parseMap(string: string): Map<string, string> {
        return <any>new Map(string.split('\n')
            .map(row => <any>row.split('=>').map(word => word.trim().toLocaleLowerCase())));
    }

    public encrypt(plaintext: string, codebook: string): string {
        return plaintext
            .replace(/\s+/g, ' ')
            .split(' ')
            .map(word => {
                const mappedWord = this.parseMap(codebook).get(word);
                return mappedWord ? mappedWord : word;
            })
            .join(' ');
    }

    constructor() {
    }

}
