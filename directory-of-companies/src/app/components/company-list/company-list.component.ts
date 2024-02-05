import { Component, Input } from "@angular/core";
import { ICompany } from "../../models/company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  @Input() companies: ICompany[]
}