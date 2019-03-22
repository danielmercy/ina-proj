import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isEditable: boolean = true;

  generalForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  
  locationForm: FormGroup = new FormGroup({
    apc: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    location: new FormControl('')
  });
  
  planForm: FormGroup = new FormGroup({
    plan: new FormControl('')
  });
  
  generalFormValid: boolean = this.generalForm.valid;
  locationFormValid: boolean = this.locationForm.valid;
  planFormValid: boolean = this.planForm.valid;

  hide: boolean = false;
  favoritePlan: any;

  plans: Array<Object> = [
    {
      value: 'one_time',
      title: 'One time installation',
      price: 24000000,
      discount: '12%',
      checked: false
    },{
      value: 'one_year',
      title: '12 months payments',
      price: 60000,
      discount: '6%',
      checked: false
    },{
      value: 'as_you_go',
      title: 'Monthly',
      price: 60000/12,
      discount: '0%',
      checked: false
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
