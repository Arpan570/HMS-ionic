import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetails } from '../patient-details-model';
import * as genders from './../../shared/constants/gender.constant';
import * as relations from './../../shared/constants/relations.constant';

@Component({
  selector: 'demographics-details-patient',
  templateUrl: './demographics-details-patient.component.html',
  styleUrls: ['./demographics-details-patient.component.scss'],
})
export class DemographicsDetailsComponent implements OnInit, OnChanges{

  public patientDemographicForm: FormGroup;
  public openWarningPopup: boolean = false;
  public genders = genders.GENDER_CONSTANTS;
  public relations = [...relations.RELATIONS_CONSTANTS];
  @Output('tabChangeEvent') tabChangeEvent = new EventEmitter<string>();
  @Input('tabChangedFromHeader') tabChangedFromHeader: string = '';

  constructor(public formBuilder: FormBuilder, private router: Router, private patientDetails: PatientDetails) {
    console.log(relations)
    console.log(genders)
  }
  ngOnInit() {
    
    this.patientDemographicForm = this.formBuilder.group({
      emergencyContactName: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern('^[a-zA-Z \-\']+')
        ]
      ],
      emergencyContactNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(1000000000),
          Validators.max(9999999999)
        ]
      ],
      emergencyContactAadharNumber: [
        '',
        [
          Validators.required,
          Validators.min(100000000000),
          Validators.max(999999999999)
        ]
      ],
      emergencyContactEmail: [
        '',
        [
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.email
        ],
      ],
      emergencyContactRelation: [
        '',
        [
          Validators.required
        ]
      ],
      emergencyContactGender: [
        '',
        [
          Validators.required
        ]
      ],
      emergencyContactAddress: [
        '',
        [
          Validators.required
        ]
      ],
    });
    this.getDemographicDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(
      changes.tabChangedFromHeader
      && !changes.tabChangedFromHeader?.firstChange
      && (changes.tabChangedFromHeader?.currentValue != 'tab_3')) {
      this.setDemographicDetails();
    }
  }


  get errorControl() {
    return this.patientDemographicForm.controls;
  }

  setOpen(isOpen: boolean) {
    this.openWarningPopup = isOpen;
  }

  navigateToHomePage() {
    this.patientDetails.resetFormData();
    this.router.navigate(['/home']);
  }

  submitForm() {
    let errorsExists = false
    Object.keys(this.patientDemographicForm.controls).forEach(key => {
      if(this.patientDemographicForm.controls[key].errors) {
        errorsExists = true;
        return;
      }
    });
  
    // if(errorsExists) {
    //   this.setOpen(true);
    // } else {
    //   this.setDemographicDetails();
    // }
    console.log(errorsExists)
    this.setDemographicDetails();
  }

  setDemographicDetails() {
    this.patientDetails.emergencyContactName = this.patientDemographicForm.controls['emergencyContactName'].value;
    this.patientDetails.emergencyContactNumber = this.patientDemographicForm.controls['emergencyContactNumber'].value;
    this.patientDetails.emergencyContactAadharNumber = this.patientDemographicForm.controls['emergencyContactAadharNumber'].value;
    this.patientDetails.emergencyContactEmail = this.patientDemographicForm.controls['emergencyContactEmail'].value;
    this.patientDetails.emergencyContactGender = this.patientDemographicForm.controls['emergencyContactGender'].value;
    this.patientDetails.emergencyContactRelation = this.patientDemographicForm.controls['emergencyContactRelation'].value;
    this.patientDetails.emergencyContactAddress = this.patientDemographicForm.controls['emergencyContactAddress'].value;
    //this.tabChangeEvent.emit('3');
  }

  getDemographicDetails() {
    this.patientDemographicForm.controls['emergencyContactName'].setValue(this.patientDetails.emergencyContactName);
    this.patientDemographicForm.controls['emergencyContactNumber'].setValue(this.patientDetails.emergencyContactNumber);
    this.patientDemographicForm.controls['emergencyContactAadharNumber'].setValue(this.patientDetails.emergencyContactAadharNumber);
    this.patientDemographicForm.controls['emergencyContactEmail'].setValue(this.patientDetails.emergencyContactEmail);
    this.patientDemographicForm.controls['emergencyContactGender'].setValue(this.patientDetails.emergencyContactGender);
    this.patientDemographicForm.controls['emergencyContactRelation'].setValue(this.patientDetails.emergencyContactRelation);
    this.patientDemographicForm.controls['emergencyContactAddress'].setValue(this.patientDetails.emergencyContactAddress);
  }


  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.relations = [...relations.RELATIONS_CONSTANTS].filter((d) => d.value.toLowerCase().indexOf(query) > -1);
  }
}