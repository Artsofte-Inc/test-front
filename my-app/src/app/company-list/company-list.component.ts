import {Component, OnInit} from '@angular/core';
import { HttpService } from "../services/requests.service";

export interface ICompany {
  logo:string,
  suffix:string
  business_name:string,
  industry:string,
  type:string,
  id:string,
  catch_phrase:string,
  phone_number:string,
  full_address:string
}

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {

  data:any = [];
  companyList:ICompany[] = [];
  tempCompanyList:ICompany[] = [];
  industryList:string[] = ["не выбрано"];
  typeList:string[] = ["не выбрано"];

  constructor(private httpService: HttpService){};

  ngOnInit() {
    this.httpService.getCompanies().subscribe((data) => {

      this.data = data
      this.companyList = data;
      this.tempCompanyList = data.slice();
      this.companyList.map((elem) => {
        if (!this.industryList.includes(elem.industry)) {
          this.industryList.push(elem.industry);
        }
        if (!this.typeList.includes(elem.type)) {
          this.typeList.push(elem.type);
        }
      });
    });
  }

  onChangedSort(increased:string) {
    if (increased === "business_name") {
      this.companyList.sort((a:ICompany,b:ICompany) => a.business_name > b.business_name ? 1 : -1)
    }
    if (increased === "type") {
      this.companyList.sort((a:ICompany,b:ICompany) => a.type > b.type ? 1 : -1)
    }
    if (increased === "industry") {
      this.companyList.sort((a:ICompany,b:ICompany) => a.industry > b.industry ? 1 : -1)
    }
  }

  usingFilters(param:string,elem:ICompany,increased:any) {
    if (param === "name") {
      return elem.business_name.match(
          new RegExp('^' + increased.businessName + '[a-zA-Z0-9]*', 'ig')) ||
        elem.suffix.match(new RegExp('^' + increased.businessName + '[a-zA-Z0-9]*', 'ig'))
    }
    else if (param === "type") {
      return elem.type === increased.type
    }
    else if (param === "industry") {
      return elem.industry === increased.industry
    }
    else throw Error("Невалидный параметр функции")
  }

  onChangedFilter(increased:any) {
    if (increased.businessName) {
      if (increased.type !== "не выбрано" && increased.industry !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("name",elem,increased)
          && this.usingFilters("type",elem,increased) && this.usingFilters("industry",elem,increased)
        );
      }
      else if (increased.type !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("name",elem,increased)
        && this.usingFilters("type",elem,increased))
      }
      else if (increased.industry !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("name",elem,increased)
        && this.usingFilters("industry",elem,increased));
      }
      else {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("name",elem,increased))
      }
    }
    else {
      this.companyList = this.data
      if (increased.type !== "не выбрано" && increased.industry !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("type",elem,increased)
          && this.usingFilters("industry",elem,increased));
      }
      else if (increased.type !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("type",elem,increased));
      }
      else if (increased.industry !== "не выбрано") {
        this.companyList = this.tempCompanyList.filter(elem => this.usingFilters("industry",elem,increased));
      }
    }
  }

}
