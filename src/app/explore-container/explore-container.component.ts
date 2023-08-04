import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators   } from '@angular/forms';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit{
  public ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}
  @Input() name?: string;
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      aadharNumber: ['', [Validators.required, Validators.minLength(16), Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.email
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  get errorControl() {
    console.log(this.ionicForm.controls)
    return this.ionicForm.controls;
  }

  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

}
