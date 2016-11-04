import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'ascii'
})
export class AsciiPipe implements PipeTransform {

    transform(text: string): any {
        return text.split('')
            .map(letter => letter == ' ' ? String.fromCharCode(160) : letter) // nbsp
            .map(letter => [letter, letter.charCodeAt(0)]);
    }

}
