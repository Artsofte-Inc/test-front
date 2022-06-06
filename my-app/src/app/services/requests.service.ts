import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICompany } from "../company-list/company-list.component";

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){};

  endpoint:string = 'https://random-data-api.com/api/company/random_company?size=100'

  getCompanies():Observable<ICompany[]>{
    return this.http.get(this.endpoint).pipe(map((data:any)=>{
      return data.map(function(item:ICompany): ICompany {
        return {logo:item.logo,suffix:item.suffix,business_name:item.business_name, industry:item.industry, type:item.type,
          id:item.id,catch_phrase:item.catch_phrase,phone_number:item.phone_number,full_address:item.full_address};
      });
    }));
  }
}
