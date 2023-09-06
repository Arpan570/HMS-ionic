import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonheaderComponent{
  constructor(private router: Router) {

  }
  
  logout() {
    console.log('user logged out')
  }
  navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}