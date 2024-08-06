import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitCamelCase',
    standalone: true,
})
export class SplitCamelCasePipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
}
