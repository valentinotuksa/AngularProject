import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeFirst',
    standalone: true,
})
export class CapitalizeFirstPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\b\w/g, (char) => char.toUpperCase());
    }
}
