import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'spaceToNbsp'
})
export class SpaceToNbspPipe implements PipeTransform {

    transform(letter: string): string {
        return letter === ' ' ? '\xa0' : letter;
    }

}
