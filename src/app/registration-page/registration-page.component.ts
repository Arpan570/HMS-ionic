import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  public selectedTab: string = "tab_1";
  
  constructor() {}

  switchTab(tabNumber: any) {
    this.selectedTab = 'tab_' + tabNumber.detail?.value;
  }
}