import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageComponent } from './registration-page.component';
import { PersonalDetailsPageComponent } from './../registration-page/personal-details/personal-details.component';
import { InsuranceDetailsComponent } from './../registration-page/insurance-details-patient/insurance-details-patient.component';
import { DemographicsDetailsComponent } from './../registration-page/demographics-details-patient/demographics-details-patient.component';
import { PatientSummaryComponent } from './patient-summary/patient-summary.component';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        { path: '', component: RegistrationPageComponent }
      ]
      )
    ],
  declarations: [
    RegistrationPageComponent,
    PersonalDetailsPageComponent,
    InsuranceDetailsComponent,
    DemographicsDetailsComponent,
    PatientSummaryComponent
  ],
  exports: [RegistrationPageComponent]
})
export class RegistrationPageModule {}
