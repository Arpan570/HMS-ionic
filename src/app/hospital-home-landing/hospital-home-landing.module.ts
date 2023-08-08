import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitalHomePageLandingComponent } from './hospital-home-landing-component';
import { HospitalHomePageLandingRoutingModule } from './hospital-home-landing-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HospitalHomePageLandingRoutingModule,
    SharedModule
  ],
  declarations: [HospitalHomePageLandingComponent]
})
export class HospitalHomePageLandingModule {}
