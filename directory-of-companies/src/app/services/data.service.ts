import { Injectable } from "@angular/core";
import { ICompany } from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private companies: ICompany[]

  setCompanies(companies: ICompany[]) {
    this.companies = companies
  }

  getCompanies(): ICompany[] {
    return this.companies
  }

  findCompanyById(id: number): ICompany | undefined {
    return this.companies.find((company) => company.id == id);
  }
}