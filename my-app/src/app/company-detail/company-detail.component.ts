import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ICompany} from "../company-list/company-list.component";

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  companyDetail:ICompany = {logo:"",suffix:"",business_name:"", industry:"", type:"",id:"",
    catch_phrase:"",phone_number:"",full_address:""}

  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute){

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.companyDetail.logo = queryParam['logo'];
        this.companyDetail.suffix = queryParam['suffix'];
        this.companyDetail.business_name = queryParam['business_name'];
        this.companyDetail.industry = queryParam['industry'];
        this.companyDetail.catch_phrase = queryParam['catch_phrase'];
        this.companyDetail.phone_number = queryParam['phone_number'];
        this.companyDetail.full_address = queryParam['full_address'];
      }
    );
  }
}
