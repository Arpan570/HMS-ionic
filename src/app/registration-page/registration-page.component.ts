import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators   } from '@angular/forms';

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit{
  aadharCard: string;
  patientName: string;
  patientAddress: string;
  patientPincode: string;
  patientMobileNumber: string;
  genderSelection: String;

  public ionicForm: FormGroup;
  public currentDate: any;
  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {
    this.currentDate = new Date();
    console.log(this.currentDate);
    console.log(new Date().toISOString())
    this.ionicForm = this.formBuilder.group({
      aadharNumber: ['', [Validators.required, Validators.min(100000000000), Validators.max(999999999999)]],
      uhidNo: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.min(100000), Validators.max(999999)]],
      patientName: ['', [Validators.required, Validators.maxLength(100)]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.email
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1000000000), Validators.max(9999999999)]]
    });
  }

  get errorControl() {
    console.log(this.ionicForm.controls)
    return this.ionicForm.controls;
  }

  submitForm = () => {
    console.log(this.ionicForm.value);
  };
  onFileChange(event: any) {
    console.log(event);
  }
  trigger() {
    let element = document.getElementById('upload_file') as HTMLInputElement;
    element.click();
  }
  
}