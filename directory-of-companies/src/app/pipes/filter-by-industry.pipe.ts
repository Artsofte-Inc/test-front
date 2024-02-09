import { Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../models/company';

@Pipe({
  name: 'filterByIndustry'
})
export class FilterByIndustryPipe implements PipeTransform {

  transform(companies: ICompany[], industry: string): ICompany[] {
    if (industry === 'All industries') {
      return companies
    }
    
    return companies.filter((company) => company.industry === industry);
  }
}
