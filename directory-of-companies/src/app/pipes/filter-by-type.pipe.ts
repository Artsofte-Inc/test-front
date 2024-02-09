import { Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../models/company';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(companies: ICompany[], type: string): ICompany[] {
    if (type === 'All types') {
      return companies
    }

    return companies.filter((company) => company.type === type);
  }
}
