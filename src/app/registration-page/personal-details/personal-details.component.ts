import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import {  FormGroup, FormBuilder, Validators   } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { PatientDetails } from './../patient-details-model';
import * as genders from './../../shared/constants/gender.constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsPageComponent implements OnInit, OnChanges{
  public personalDetailsForm: FormGroup;
  public referralDetailsForm: FormGroup;
  public currentDate: any;
  public openWarningPopup: boolean = false;
  public genders = genders.GENDER_CONSTANTS;
  public referralDropdown: boolean = false;
  public referralAddDropdown: boolean = false;
  public errorMessageReferralForm: boolean = false;
  public showReferralAddedConfirmation: boolean = false;
  public searchReferralString: string = '';
  public showLoader: boolean = false;
  public referralMaster: any[] = [];
  public referrals: any[] = [];
  
  @Input('tabChangedFromHeader') tabChangedFromHeader: string = '';
  @Output('tabChangeEvent') tabChangeEvent = new EventEmitter<string>();
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private patientDetails: PatientDetails,
    private http: HttpClient
    ) {}
  ngOnInit() {
    this.setInitialConfigs();
    this.getPersonalDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(
      changes.tabChangedFromHeader
      && !changes.tabChangedFromHeader?.firstChange
      && (changes.tabChangedFromHeader?.currentValue != 'tab_1')) {
      console.log('hey')
      this.setPersonalDetails();
    }
  }

  setInitialConfigs() {
    this.currentDate = moment(new Date()).format('YYYY-MM-DD');
    this.personalDetailsForm = this.formBuilder.group({
      aadharNumber: [
        '',
        [
          Validators.required,
          Validators.min(100000000000),
          Validators.max(999999999999)
        ]
      ],
      uhidNo: [
        '',
        [Validators.required]
      ],
      dateOfBirth: [
        '',
        [Validators.required]
      ],
      pincode: [
        '',
        [
          Validators.required,
          Validators.min(100000),
          Validators.max(999999)
        ]
      ],
      patientName: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern('^[a-zA-Z \-\']+')
        ]
      ],
      gender: [
        '',
        [Validators.required]
      ],
      referral: [
        'none',
        [Validators.required]
      ],
      district: [
       '',
        [Validators.required]
      ],
      state: [
       '',
        [Validators.required]
      ],
      address: [
        '',
        [Validators.required]
      ],
      email: [
        '',
        [
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.email
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(1000000000),
          Validators.max(9999999999)
        ]
      ]
    });
    this.personalDetailsForm.controls.state.disable();
    this.personalDetailsForm.controls.district.disable();
    this.personalDetailsForm.controls.uhidNo.disable();
    this.referralDetailsForm = this.formBuilder.group({
      referralAadharNumber: [
        '',
        [
          Validators.required,
          Validators.min(100000000000),
          Validators.max(999999999999)
        ]
      ],
      referralName: [
        '',
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern('^[a-zA-Z \-\']+')
        ]
      ],
      referralMobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(1000000000),
          Validators.max(9999999999)
        ]
      ]
    });
    this.referrals = this.referralMaster = [
      {
        value: 'ref1',
        displayValue: 'Referral 1'
      },
      {
        value: 'ref2',
        displayValue: 'Referral 2'
      },
      {
        value: 'ref3',
        displayValue: 'Referral 3'
      },
      {
        value: 'ref4',
        displayValue: 'Referral 4'
      },
      {
        value: 'ref5',
        displayValue: 'Referral 5'
      },
      {
        value: 'ref6',
        displayValue: 'Referral 6'
      },
      {
        value: 'ref7',
        displayValue: 'Referral 7'
      },
      {
        value: 'ref8',
        displayValue: 'Referral 8'
      },
      {
        value: 'ref9',
        displayValue: 'Referral 9'
      },
    ]
  }
  get errorControl() {
    return this.personalDetailsForm.controls;
  }

  submitForm = () => {
    let errorsExists = false
    Object.keys(this.personalDetailsForm.controls).forEach(key => {
      if(this.personalDetailsForm.controls[key].errors) {
        errorsExists = true;
        return;
      }
    });
  
    if(errorsExists) {
      this.setOpen(true);
    } else {
      this.setPersonalDetails(true);
    }
    console.log(errorsExists)
    //this.setPersonalDetails(true);
  }

  submitReferralForm = () => {
      let errorsExists = false
      this.errorMessageReferralForm = false;
      Object.keys(this.referralDetailsForm.controls).forEach(key => {
        if(this.referralDetailsForm.controls[key].errors) {
          errorsExists = true;
          return;
        }
      });
    
      if(errorsExists) {
        this.errorMessageReferralForm = true;
        return;
      } else {
        this.showLoader = true;
        this.saveReferralDetails();
      }
  }

  saveReferralDetails() {
    setTimeout(() => {
      this.showReferralAddedConfirmation = true;
      this.showLoader = false;
      setTimeout(() => {
        let tempObj = {
          value: this.referralDetailsForm.controls.referralAadharNumber.value,
          displayValue: this.referralDetailsForm.controls.referralName.value
        }
        this.referralMaster.push(tempObj);
        this.personalDetailsForm.controls.referral.patchValue(this.referralDetailsForm.controls.referralName.value);
        this.showReferralAddedConfirmation = false;
        this.referralAddDropdown = false;
      }, 5000);
    }, 2500);
  }

  setPersonalDetails(changeFromContinue = false) {
    this.patientDetails.aadharNumber = this.personalDetailsForm.controls['aadharNumber'].value;
    this.patientDetails.dateOfBirth = this.personalDetailsForm.controls['dateOfBirth'].value;
    this.patientDetails.patientName = this.personalDetailsForm.controls['patientName'].value;
    this.patientDetails.gender = this.personalDetailsForm.controls['gender'].value;
    this.patientDetails.uhidNo = this.personalDetailsForm.controls['uhidNo'].value;
    this.patientDetails.address = this.personalDetailsForm.controls['address'].value;
    this.patientDetails.mobile = this.personalDetailsForm.controls['mobile'].value;
    this.patientDetails.pincode = this.personalDetailsForm.controls['pincode'].value;
    this.patientDetails.state = this.personalDetailsForm.controls['state'].value;
    this.patientDetails.district = this.personalDetailsForm.controls['district'].value;
    this.patientDetails.referral = this.personalDetailsForm.controls['referral'].value;
    this.patientDetails.email = this.personalDetailsForm.controls['email'].value;
    if(changeFromContinue) {
      this.tabChangeEvent.emit('2');
    }
  }

  getPersonalDetails() {
    this.personalDetailsForm.controls['aadharNumber'].setValue(this.patientDetails.aadharNumber);
    this.personalDetailsForm.controls['dateOfBirth'].setValue(this.patientDetails.dateOfBirth);
    this.personalDetailsForm.controls['patientName'].setValue(this.patientDetails.patientName);
    this.personalDetailsForm.controls['gender'].setValue(this.patientDetails.gender);
    this.personalDetailsForm.controls['uhidNo'].setValue(this.patientDetails.uhidNo);
    this.personalDetailsForm.controls['address'].setValue(this.patientDetails.address);
    this.personalDetailsForm.controls['mobile'].setValue(this.patientDetails.mobile);
    this.personalDetailsForm.controls['pincode'].setValue(this.patientDetails.pincode);
    this.personalDetailsForm.controls['state'].setValue(this.patientDetails.state);
    this.personalDetailsForm.controls['district'].setValue(this.patientDetails.district);
    this.personalDetailsForm.controls['referral'].setValue(this.patientDetails.referral);
    this.personalDetailsForm.controls['email'].setValue(this.patientDetails.email);
  }

  onFileChange(event: any) {
    console.log(event);
  }


  updateStateDistrict() {
    let pincode = this.personalDetailsForm.controls.pincode.value;
    if(pincode.toString().length  == 6) {
      this.http.get('https://api.postalpincode.in/pincode/' + pincode).subscribe((res: any) => {
        if(res[0].Status == 'Success') {
          this.personalDetailsForm.controls.state.setValue(res[0].PostOffice[0].State);
          this.personalDetailsForm.controls.district.setValue(res[0].PostOffice[0].District);
        } else  {
          this.personalDetailsForm.controls.pincode.setErrors({'incorrect': true})
          this.personalDetailsForm.controls.state.setValue('');
          this.personalDetailsForm.controls.district.setValue('');
        }
      });
    }
  }

  setOpen(isOpen: boolean) {
    this.openWarningPopup = isOpen;
  }

  navigateToHomePage() {
    this.patientDetails.resetFormData();
    this.router.navigate(['/home']);
  }

  toggleReferralDropdown(value: boolean) {
    this.referralDropdown = value;
    this.referrals = this.referralMaster;
    this.searchReferralString = '';
  }

  toggleAddReferralDropdown(value: boolean) {
    this.referralAddDropdown = value;
  }

  searchReferral() {
    this.referrals = this.referralMaster;
    if (this.searchReferralString.trim() == '') {
      return;
    }

    this.referrals = this.referrals.filter((v) => {
      if (v.displayValue.toLowerCase().indexOf(this.searchReferralString.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  referralSelected(referral: any) {
    this.toggleReferralDropdown(false);
    this.personalDetailsForm.controls.referral.patchValue(referral.displayValue)
  }
}