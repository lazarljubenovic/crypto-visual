import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'highlights'
})
export class HighlightsPipe implements PipeTransform {

    transform(ranges: number[][]): number[][] {
        const positions = ranges
            .map(range => Array(range[1] - range[0]).fill(range[0]).map((x, i) => x + i))
            .reduce((acc, curr) => acc.concat(curr), []);
        return positions.map(position => [Math.floor(position / 8), position % 8]);
    }

}
