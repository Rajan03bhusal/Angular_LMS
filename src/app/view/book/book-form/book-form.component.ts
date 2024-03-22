import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../book.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  constructor(
    private book: BookService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookFormComponent>,
    private MatSnackBar: MatSnackBar
  ) {}
  formObject = {
    title: '',
    author: '',
    genre: '',
    quantity: '',
    availableQuantity: '',
    userPersonId: '',
  };
  Save() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userPersonId = userData.res[0].userPersonId;
      //console.log(userPersonId);
      this.formObject.userPersonId = userPersonId;
      this.formObject.availableQuantity = this.formObject.quantity;
      this.book.setBook(this.formObject).subscribe((res) => {
        if (res) {
          //  console.log(res);
          this.MatSnackBar.open('Book Added Successfully', 'Ok');
          this.dialogRef.close(res);
        }
      });
    }
  }
  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject = { ...this.data.data };
    }
  }
}
