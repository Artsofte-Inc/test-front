import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../models/company';
import { DataService } from '../../services/data.service';
import { IPlacemark } from '../../models/placemark';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  companies: ICompany[] = []
  placemarks: IPlacemark[] = []

  clustererOptions: ymaps.IClustererOptions = {
    gridSize: 32,
    clusterDisableClickZoom: true,
    preset: 'islands#greenClusterIcons',
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.companies = this.dataService.getCompanies()

    this.companies.forEach((company) => {
      this.placemarks.push({
        geometry: [company.latitude, company.longitude],
        properties: {
          balloonContent: `Company name: ${company.suffix} "${company.business_name}"
          \nIndustry: ${company.industry}
          \nType: ${company.type}`.replaceAll('\n', '<br>'),
        },
        options: {
          preset: 'islands#greenDotIcon'
        }
      })
    })
  }
}
