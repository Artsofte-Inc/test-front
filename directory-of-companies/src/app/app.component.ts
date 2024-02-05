import { Component } from '@angular/core';
import { ICompany } from './models/company';  
import { companies } from './data/companies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Справочник компаний';
  companies: ICompany[] = companies;
}
