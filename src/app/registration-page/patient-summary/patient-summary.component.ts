import { Component, OnInit } from '@angular/core';
import { PatientDetails } from '../patient-details-model';

@Component({
  selector: 'patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss'],
})
export class PatientSummaryComponent implements OnInit{
  constructor(private patientDetails: PatientDetails) {}
  public patientRegistrationDetails: any;
  ngOnInit() {
    this.getPatientDetails();
  }

  getPatientDetails() {
    this.patientRegistrationDetails = this.patientDetails.getPersonalPatientData();
  }
}