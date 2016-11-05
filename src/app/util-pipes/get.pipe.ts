import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'get'
})
export class GetPipe implements PipeTransform {

    transform(object: any, key: any): any {
        if (object == null || key == null) {
            return null;
        } else {
            return object[key];
        }
    }

}
