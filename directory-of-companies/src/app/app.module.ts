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
import { MapComponent } from './components/map/map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { NavigationComponent } from './components/navigation/navigation.component';

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
    SortByParamPipe,
    MapComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
