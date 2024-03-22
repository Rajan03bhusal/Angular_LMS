import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MembershipService } from './membership.service';
import { UsersService } from '../users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  form!: FormGroup;
  userList: any[] = [];
  memberShipList: any[] = [];
  currentUrl: string = '';
  isLinear = false;
  userPersonId: number = 0;

  constructor(
    private member: MembershipService,
    private formBuilder: FormBuilder,
    private users: UsersService,
    public dialog: MatDialog,
    private router: Router,
    private MatSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMemberShip();
    this.getUsers();
    this.currentUrl = this.router.url;

    // Initialize the form
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', [Validators.required]],
      userName: ['', Validators.required],
      phone: ['', Validators.required],
      membershipId: ['', Validators.required],
      amount: [''],
      userPersonId: [this.userPersonId],
      lateReturnCharge: [''],
      maxBorrow: [''],
    });

    // Get userPersonId from local storage
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.userPersonId = userData.res[0].userPersonId;
      console.log(this.userPersonId);

      this.form.patchValue({ userPersonId: this.userPersonId });
    }
  }

  getMemberShip() {
    this.member.getMemberShipList({}).subscribe((res) => {
      this.memberShipList = res;
      console.log(this.memberShipList);
    });
  }

  getUsers() {
    this.users.getUser({}).subscribe((res) => {
      this.userList = res.data.filter(
        (user: any) => user.userType === 'Regular_user'
      );
    });
  }

  save() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.member.setMemberShip(formData).subscribe(
        (response) => {
          console.log('Membership data saved successfully:', response);
          this.MatSnackBar.open('Membership added successfully', 'Ok');
          this.form.reset();
        },
        (error) => {
          console.error('Error occurred while saving membership data:', error);
        }
      );
    }
  }

  updateFee() {
    const membershipId = this.form.get('membershipId')?.value;
    const selectedMembership = this.memberShipList.find(
      (membership) => membership.membershipId === membershipId
    );
    if (selectedMembership) {
      this.form.patchValue({
        amount: selectedMembership.fee,
        lateReturnCharge: selectedMembership.LateReturnCharge,
        maxBorrow: selectedMembership.maxBorrow,
      });
    }
  }
}
