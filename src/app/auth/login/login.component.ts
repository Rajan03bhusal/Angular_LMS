import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hidePassword: boolean = true;

  formObject = {
    userName: '',
    password: '',
  };

  constructor(
    private user: AuthService,
    public snackbar: MatSnackBar,
    private router: Router
  ) {}

  login() {
    //    console.log(this.formObject);

    this.user.getUser(this.formObject).subscribe((res) => {
      if (res) {
        let json = { res };
        localStorage.setItem('user', JSON.stringify(json));
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
          const user = JSON.parse(userDataString);
          const userType = user.res[0].userType;
          if (userType == 'Admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['user']);
          }
        }
      } else {
        this.snackbar.open('Invalid Credential!', 'OK');
      }
    });
  }
}
