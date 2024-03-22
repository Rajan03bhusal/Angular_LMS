import { UsersService } from '../users.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  formObject = {
    name: '',
    emailAddress: '',
    phone: '',
    userName: '',
    password: '',
    userType: 'Regular_user',
    userPersonId: '',
  };

  constructor(
    private user: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UsersFormComponent>
  ) {}

  Save() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userPersonId = userData.res[0].userPersonId;
      this.formObject.userPersonId = userPersonId;
      this.user.setUser(this.formObject).subscribe((res) => {
        // console.log(res);
        this.dialogRef.close(res);
      });
    }
  }
  ngOnInit(): void {}
}
