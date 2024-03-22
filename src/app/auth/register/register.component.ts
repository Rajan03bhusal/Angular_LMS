import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hidePassword: boolean = true;

  formObject = {
    name: '',
    emailAddress: '',
    phone: '',
    userName: '',
    password: '',
  };

  constructor() {}

  Save() {
    console.log('Registration data:', this.formObject);
  }
}
