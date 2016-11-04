import {Pipe, PipeTransform} from "@angular/core";
import * as _ from 'lodash';

@Pipe({
    name: 'label'
})
export class LabelPipe implements PipeTransform {

    transform(memoryLength: number, type: 'row' | 'col'): any {
        const length = type == 'row' ? Math.ceil(memoryLength / 8) : 8;
        const init = Array(length).fill(0).map((_, i) => i);
        console.log(type, memoryLength, length);
        if (type == 'row') {
            return init
                .map(x => (x * 8).toString(16))
                .map(label => _.padStart(label, 6, '0'));
        } else {
            return init
                .map(x => x.toString(16))
                .map(label => _.padStart(label, 2, '0'));
        }
    }

}
