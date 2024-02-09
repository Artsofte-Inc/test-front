import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CopmanyItemComponent } from './components/company-item/company-item.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FilterByIndustryPipe } from './pipes/filter-by-industry.pipe';
import { SortByParamPipe } from './pipes/sort-by-param.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CopmanyItemComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    FilterByNamePipe,
    FilterByTypePipe,
    FilterByIndustryPipe,
    SortByParamPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
