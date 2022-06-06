import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss']
})
export class CompanySortComponent {

  @Output() onChangedSort = new EventEmitter<string>();

  sortByName() {
    this.onChangedSort.emit("business_name");
  }

  sortByType() {
    this.onChangedSort.emit("type");
  }

  sortByIndustry() {
    this.onChangedSort.emit("industry");
  }

}
