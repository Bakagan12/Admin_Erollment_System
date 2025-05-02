import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesos'
})
export class PesosPipe implements PipeTransform {

  transform(value: number, showSymbol: boolean = true): string {
    if (value == null) return '';

    const formatted = value.toLocaleString('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2,
    });

    return showSymbol ? formatted : formatted.replace('₱', '').trim();
  }

}
