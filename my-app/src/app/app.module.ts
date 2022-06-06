import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-item/company-item.component'
import { HttpService } from "./services/requests.service";
import { HttpClientModule } from "@angular/common/http";
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes =[
  { path: 'detail/:id', component: CompanyDetailComponent},
  { path: 'list', component: CompanyListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
