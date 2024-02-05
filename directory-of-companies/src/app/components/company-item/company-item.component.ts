import { Component, Input } from "@angular/core";
import { ICompany } from "../../models/company";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CopmanyItemComponent {
  @Input() company: ICompany
}