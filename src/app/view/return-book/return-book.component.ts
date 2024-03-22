import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReturnBookService } from './return-book.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss'],
})
export class ReturnBookComponent {
  returnForm: FormGroup;
  fineToPaid!: number;
  isFineClicked: boolean = false;
  dayDiff: number = 0;
  lateReturnCharge: number = 0;
  actualCharge: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ReturnBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public fineService: ReturnBookService,
    private snackBar: MatSnackBar
  ) {
    this.returnForm = this.formBuilder.group({
      userId: [data.userId, Validators.required],
      bookId: [data.bookId, Validators.required],
      fine: [''],
    });
  }

  Findfine() {
    if (this.returnForm.valid) {
      const json = {
        userId: this.returnForm.value.userId,
        bookId: this.returnForm.value.bookId,
        returnedDate: new Date(),
      };
      this.fineService.getFine(json).subscribe((res: any) => {
        this.dayDiff = res.DayDifference;
        this.lateReturnCharge = res.LateReturnCharge;
        this.actualCharge = res.ActualCharge;
        this.isFineClicked = true;
      });
    }
  }

  ReturnBook() {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userPersonId = userData.res[0].userPersonId;
      const json = {
        userId: this.returnForm.value.userId,
        bookId: this.returnForm.value.bookId,
        returnedDate: new Date(),
        userPersonId: userPersonId,
        charge: this.actualCharge,
      };

      this.fineService.ReturnBook(json).subscribe((res) => {
        this.snackBar.open('Book returned successfully', 'Ok');
        this.dialogRef.close({ bookReturned: true });
        this.dialogRef.close(res);
      });
    }
  }

  onSubmit() {}
}
