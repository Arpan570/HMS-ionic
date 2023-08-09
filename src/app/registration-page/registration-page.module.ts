import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageComponent } from './registration-page.component';
import { PersonalDetailsPageComponent } from './../registration-page/personal-details/personal-details.component';
import { InsuranceDetailsComponent } from './../registration-page/insurance-details-patient/insurance-details-patient.component';
import { DemographicsDetailsComponent } from './../registration-page/demographics-details-patient/demographics-details-patient.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SharedModule,
    RouterModule.forChild([{ path: '', component: RegistrationPageComponent }])],
  declarations: [RegistrationPageComponent, PersonalDetailsPageComponent, InsuranceDetailsComponent, DemographicsDetailsComponent],
  exports: [RegistrationPageComponent]
})
export class RegistrationPageModule {}
