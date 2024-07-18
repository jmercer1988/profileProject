import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
@Pipe({
  name: 'jmFormatDate',
  standalone: true
})
export class JmFormatDatePipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe
  ) {}

  transform(value: any, type?: 'date' | 'number' | 'currency'): any {
    if (type === 'date') {
      return this.datePipe.transform(value, 'shortDate');
    } else if (type === 'currency') {
      return this.currencyPipe.transform(value, 'AUD'); // Example currency
    } else if (type === 'number') {
      return this.decimalPipe.transform(value, '1.2-2'); // Example number format
    }
    return value; 
  }

}
