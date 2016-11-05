import {Pipe, PipeTransform} from "@angular/core";
import * as _ from 'lodash';

@Pipe({
    name: 'padStart'
})
export class PadStartPipe implements PipeTransform {

    transform(string: string, length: number = 0, chars: string = ' '): any {
        return _.padStart(string, length, chars);
    }

}
