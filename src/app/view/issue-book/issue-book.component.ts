import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users/users.service';
import { BookService } from '../book/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IssueBookService } from './issue-book.service';
import { MatDialog } from '@angular/material/dialog';
import { IssueBookFormComponent } from './issue-book-form/issue-book-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss'],
})
export class IssueBookComponent implements OnInit {
  formObject = {
    userId: '',
    bookId: '',
    borrowedDate: '',
    userPersonId: '',
  };
  dataSourceForUser: any;
  dataSourceForBook: any;
  userList: any;
  bookList: any;
  displayedColumns: string[] = [];
  dataSource: any;
  currentUrl: string = '';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private user: UsersService,
    private book: BookService,
    private matSnackBar: MatSnackBar,
    private borrow: IssueBookService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  getUser() {
    let json = {};
    this.user.getUser(json).subscribe((res) => {
      this.userList = res;
      this.dataSourceForUser = res.data;
      console.log(this.dataSourceForUser);
    });
  }

  getBook() {
    let json = {};
    this.book.getBook(json).subscribe((res) => {
      if (res) {
        this.bookList = res;
        this.displayedColumns = res.column;
        this.dataSource = res.data;
        //console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  Issue(row: any) {
    const dialogRef = this.dialog.open(IssueBookFormComponent, {
      data: {
        bookId: row.bookId,
      },
    });
    // this.matSnackBar.open('Book Issue Successfully', 'Ok');

    dialogRef.afterClosed().subscribe((result) => {
      this.getBook();
      this.userList();
    });
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  ngOnInit(): void {
    this.getUser();
    this.getBook();
    this.currentUrl = this.router.url;
  }
}
