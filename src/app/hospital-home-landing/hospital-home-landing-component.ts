import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'hospital-home-landing-component.html',
  styleUrls: ['hospital-home-landing-component.scss']
})
export class HospitalHomePageLandingComponent {

  public hospitalName: string = 'Lilawati Hospital';
  public hospitalAddress: string = 'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, 411014';
  public hospitalId: string = 'XYZ123abc';
  public currentDate = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
  constructor(private router: Router) {
    this.currentDate = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
  }
  navigateFromHomePage(tabName: string) {
    this.router.navigate(['/' + tabName]);
  }
}
