import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageComponent } from './registration-page.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SharedModule,
    RouterModule.forChild([{ path: '', component: RegistrationPageComponent }])],
  declarations: [RegistrationPageComponent],
  exports: [RegistrationPageComponent]
})
export class RegistrationPageModule {}
