import {Component} from "@angular/core";

@Component({
  selector:'layout-component',
  templateUrl:'./layout.component.html',
  styleUrls:['./layout.component.scss']
})
export class LayoutComponent {
  toggle:boolean = false

  toggleList() {
    this.toggle = !this.toggle
  }
}
