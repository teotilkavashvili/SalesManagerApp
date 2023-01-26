import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropDown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowDropDown(e: any): void {
    e.stopPropagation();
    this.showDropDown = !this.showDropDown;
  }


}
