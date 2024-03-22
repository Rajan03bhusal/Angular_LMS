import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IssueBookService } from '../issue-book.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MembershipService } from '../../membership/membership.service';
import { ViewMembershipService } from '../../view-membership/view-membership.service';
@Component({
  selector: 'app-issue-book-form',
  templateUrl: './issue-book-form.component.html',
  styleUrls: ['./issue-book-form.component.scss'],
})
export class IssueBookFormComponent implements OnInit {
  userId: number;
  bookId: number;
  userList: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private users: UsersService,
    private matSnackBar: MatSnackBar,
    private borrow: IssueBookService,
    private dialogRef: MatDialogRef<IssueBookFormComponent>,
    private getMemberList: ViewMembershipService
  ) {
    this.userId = data.userId;
    this.bookId = data.bookId;
    this.userList = [];
  }

  // getUsers() {
  //   let json = {};
  //   this.users.getUser(json).subscribe((res) => {
  //     this.userList = res.data.filter(
  //       (user: any) => user.userType === 'Regular_user'
  //     );
  //   });
  //   console.log(this.userList);
  // }

  getMember() {
    let json = {};
    this.getMemberList.getCustomerMemberShipList(json).subscribe((res) => {
      this.userList = res.data;
      console.log(this.userList);
    });
  }

  Save() {
    const userDataString = localStorage.getItem('user');
    if (!userDataString) {
      this.matSnackBar.open('User data not found', 'OK');
      return;
    }

    const userData = JSON.parse(userDataString);
    const userPersonId = userData.res[0].userPersonId;
    const borrowedDate = new Date().toISOString().slice(0, 10);

    const borrowData = {
      userId: this.userId,
      bookId: this.bookId,
      userPersonId: userPersonId,
      borrowedDate: borrowedDate,
    };

    this.borrow.setBorrow(borrowData).subscribe(
      (res) => {
        this.matSnackBar.open('Book borrowed successfully', 'OK');
        this.dialogRef.close(res);
      },
      (error) => {
        this.matSnackBar.open(error.error, 'OK');
      }
    );
  }

  ngOnInit(): void {
    // this.getUsers();
    this.getMember();
    //  this.Save();
  }
}
