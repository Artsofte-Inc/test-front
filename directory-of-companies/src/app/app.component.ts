import { Component, OnInit } from '@angular/core';
import { ICompany } from './models/company';
import { CompaniesService } from './services/companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Справочник компаний';
  companies: ICompany[] = [];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService.getAll().subscribe(companies => {
      this.companies = companies
    })
  }
}
