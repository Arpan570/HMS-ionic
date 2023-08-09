import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalHomePageLandingComponent } from './hospital-home-landing-component';

const routes: Routes = [
  {
    path: 'home',
    component: HospitalHomePageLandingComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HospitalHomePageLandingRoutingModule {}
