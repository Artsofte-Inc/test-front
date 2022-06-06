import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss']
})
export class CompanyFilterComponent implements OnInit{

  myForm : FormGroup = new FormGroup({

    "businessName": new FormControl(),
    "type"        : new FormControl("не выбрано"),
    "industry"    : new FormControl("не выбрано")
  });

  @Output() onChangedFilter = new EventEmitter<string>();

  ngOnInit() {
    this.myForm.valueChanges.subscribe((form) => {
      this.onChangedFilter.emit(form);
      console.log(typeof form)
    })
  }


  @Input() industryList:string[] = [];
  @Input() typeList:string[] = []

}
