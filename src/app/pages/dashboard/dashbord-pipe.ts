import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'toReadableTime',
})

export class ToReadableDate implements PipeTransform {
    transform(value: number): number {
        return (value) / 1000;
    }
}

