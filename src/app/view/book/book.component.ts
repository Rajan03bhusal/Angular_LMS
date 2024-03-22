import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from './book.service';
import { MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from './book-form/book-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  bookList: any;
  currentUrl: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private book: BookService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  getBook() {
    let json = {};
    this.book.getBook(json).subscribe((res) => {
      if (res) {
        this.bookList = res;
        this.displayedColumns = res.column;
        this.dataSource = new MatTableDataSource<any>(res.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  Add() {
    const dialogRef = this.dialog.open(BookFormComponent, {
      data: { data: 'abc', mode: 'Add' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getBook();
    });
  }

  Edit(row: any) {
    console.log(row);
    const dialogRef = this.dialog.open(BookFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getBook();
    });
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  ngOnInit(): void {
    this.getBook();
    this.currentUrl = this.router.url;
  }
}
