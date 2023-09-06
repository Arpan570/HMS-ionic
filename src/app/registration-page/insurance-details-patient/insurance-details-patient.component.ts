import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientDetails } from './../patient-details-model';
import { Router } from '@angular/router';

@Component({
  selector: 'insurance-details-patient',
  templateUrl: './insurance-details-patient.component.html',
  styleUrls: ['./insurance-details-patient.component.scss'],
})
export class InsuranceDetailsComponent implements OnInit, OnChanges {
  constructor(public formBuilder: FormBuilder, private router: Router, private patientDetails: PatientDetails) { }
  public patientRegistrationDetails: any;
  public patientInsuranceForm: FormGroup;
  public openWarningPopup: boolean = false;
  public showLoader: boolean = true;
  public availableInsurances: any[] = [];
  public availableInsurancesMaster: any[] = [];
  public insuranceDropdown: boolean = false;
  public searchInsuranceString: string = '';
  public insuranceSelectionDone: boolean = false;
  @Output('tabChangeEvent') tabChangeEvent = new EventEmitter<string>();
  @Input('tabChangedFromHeader') tabChangedFromHeader: string = '';

  ngOnInit() {
    this.patientInsuranceForm = this.formBuilder.group({
      insuranceCompany: [
        '',
        [
          Validators.required
        ]
      ],
      insuranceNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ],
    });
    this.getPatientDetails();
    this.getAvailableInsurance();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.tabChangedFromHeader
      && !changes.tabChangedFromHeader?.firstChange
      && (changes.tabChangedFromHeader?.currentValue != 'tab_2')) {
      this.setInsuranceDetails();
    }
  }

  getPatientDetails() {
    this.patientRegistrationDetails = this.patientDetails.getInsurancePatientData();
  }

  getAvailableInsurance() {
    setTimeout(() => {
      this.availableInsurances = this.availableInsurancesMaster =
        [
          {
            value: 'indiaCare',
            displayValue: 'India Insurance'
          },
          {
            value: 'navi',
            displayValue: 'Navi Insurance'
          },
          {
            value: 'starHealth',
            displayValue: 'Star Health'
          }
          ,
          {
            value: 'careHealth',
            displayValue: 'Eare Health'
          }
        ]
      this.showLoader = false
      this.getInsuranceDetails();
    }, 100);
  }

  get errorControl() {
    return this.patientInsuranceForm.controls;
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
    Object.keys(this.patientInsuranceForm.controls).forEach(key => {
      if (this.patientInsuranceForm.controls[key].errors) {
        errorsExists = true;
        return;
      }
    });

    if (errorsExists) {
      this.setOpen(true);
    } else {
      this.setInsuranceDetails(true);
    }
    console.log(errorsExists)
    //this.setInsuranceDetails(true);
  }

  setInsuranceDetails(changeFromContinue = false) {
    this.patientDetails.insuranceCompany = this.patientInsuranceForm.controls['insuranceCompany'].value;
    this.patientDetails.insuranceNumber = this.patientInsuranceForm.controls['insuranceNumber'].value;
    if (changeFromContinue) {
      this.tabChangeEvent.emit('3');
    }
  }

  getInsuranceDetails() {
    this.patientInsuranceForm.controls['insuranceNumber'].setValue(this.patientDetails.insuranceNumber);
    this.patientInsuranceForm.controls['insuranceCompany'].setValue(this.patientDetails.insuranceCompany);
  }

  searchInsurance() {
    this.availableInsurances = this.availableInsurancesMaster;
    if (this.searchInsuranceString.trim() == '') {
      return;
    }
    this.availableInsurances = this.availableInsurances.filter((v) => {
      if (v.displayValue.toLowerCase().indexOf(this.searchInsuranceString.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  insuranceSelected(insurance: any) {
    this.insuranceSelectionDone = true;
    this.toggleInsuranceDropdown(false);
    this.patientInsuranceForm.controls.insuranceCompany.patchValue(insurance.displayValue);
  }

  toggleInsuranceDropdown(value: boolean) {
    this.searchInsuranceString = '';
    this.availableInsurances = this.availableInsurancesMaster;
    this.insuranceDropdown = value;
  }
}