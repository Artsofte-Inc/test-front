import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICompany } from '../../models/company';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  id: number
  company: ICompany | undefined
  private subcription: Subscription

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService) {
    this.subcription = activateRoute.params.subscribe( params => this.id = params['id'])
    this.company = dataService.findCompanyById(this.id)
  }
}
