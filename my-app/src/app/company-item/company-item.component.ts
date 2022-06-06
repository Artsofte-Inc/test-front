import {Component, Input, Output} from '@angular/core';
import { ICompany } from "../company-list/company-list.component";
import { Router} from "@angular/router";


@Component({
  selector: 'company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent {

  @Input() item:ICompany = {logo:"",suffix:"",business_name:"", industry:"", type:"",id:"",
    catch_phrase:"",phone_number:"",full_address:""};



  constructor(private router: Router){}

  goToDetails(){

    this.router.navigate(
      ['/detail', this.item.id],
      {
        queryParams:{
          'logo': this.item.logo,
          'business_name': this.item.business_name,
          'suffix': this.item.suffix,
          'industry': this.item.industry,
          'catch_phrase': this.item.catch_phrase,
          'phone_number': this.item.phone_number,
          'full_address': this.item.full_address,
        }
      }
    );
  }
}
