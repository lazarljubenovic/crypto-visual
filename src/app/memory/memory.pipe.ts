import {Pipe, PipeTransform} from "@angular/core";
import * as _  from 'lodash';

@Pipe({
    name: 'memory'
})
export class MemoryPipe implements PipeTransform {

    transform(memoryDump: number[]): string[][] {
        const hexCharacters: string[] = memoryDump.map(x => x.toString(16)).join('').split('');
        const quartets: string[] = _.chunk(hexCharacters, 2).map(quartet => quartet.join(''));
        return _.chunk(quartets, 8);
    }

}
