import { Component, Input } from "@angular/core";
import { ICompany } from "../../models/company";
import { Router } from "@angular/router";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CopmanyItemComponent {
  @Input() company: ICompany

  constructor(private router: Router) {}

  async navigateToDetailCompany(id: number) {
    await this.router.navigate(['detail', id])
  }
}