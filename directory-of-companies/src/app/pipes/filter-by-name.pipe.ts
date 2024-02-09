import { Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../models/company';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(companies: ICompany[], search: string): ICompany[] {
    return companies.filter((company) => company.business_name.toLowerCase().includes(search.toLowerCase()))
  }

}
