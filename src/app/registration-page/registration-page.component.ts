import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  public selectedTab: string = "tab_1";
  public selectedTabDetails: string = "detail_tab_1";
  public tabChangedFromHeader: string = '';
  
  constructor() {}

  tabChangeFromOtherComponent(tabNumber: any) {
    this.selectedTab = 'tab_' + +tabNumber;
    this.selectedTabDetails = 'detail_' + this.selectedTab;
  }

  segmentChanged(events: any) {
    this.tabChangedFromHeader =  this.selectedTab;
    setTimeout(() => {
      this.selectedTabDetails = 'detail_' + events.detail.value;
      this.tabChangedFromHeader = '';
    }, 200);
  }
}