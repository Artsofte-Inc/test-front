import { Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../models/company';

@Pipe({
  name: 'sortByParam'
})
export class SortByParamPipe implements PipeTransform {

  transform(companies: ICompany[], sortParam: string): ICompany[] {
    switch (sortParam) {
      case 'business_name': {
        companies.sort((firstCompany, secondCompany) => {
          if (firstCompany[sortParam] < secondCompany[sortParam]) {
            return -1
          }
          else return 1
        })
        return companies
      }
      case 'industry': {
        companies.sort((firstCompany, secondCompany) => {
          if (firstCompany[sortParam] < secondCompany[sortParam]) {
            return -1
          }
          else return 1
        })
        return companies
      }
      case 'type': {
        companies.sort((firstCompany, secondCompany) => {
          if (firstCompany[sortParam] < secondCompany[sortParam]) {
            return -1
          }
          else return 1
        })
        return companies
      }
    }
    return companies
  }
}
