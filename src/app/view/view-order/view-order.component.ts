import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ViewOrderService } from './view-order.service';
import { ReturnBookComponent } from '../return-book/return-book.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss'],
})
export class ViewOrderComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSourceForNotReturnedBook: any;
  dataSourceForReturnedBook: any;
  orderList: any;
  returnedBook: any;
  notReturnedBook: any;
  countNotReturnedBooks: Number = 0;
  countReturnedBooks: Number = 0;
  currentUrl: string = '';
  @ViewChild(MatPaginator, { static: true }) NotReturned!: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) ReturnedBook!: MatPaginator;

  constructor(
    private order: ViewOrderService,
    private dialog: MatDialog,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  hideRB = false;
  hideNR = false;

  getOrder() {
    let json = {};
    this.order.getOrder(json).subscribe((res) => {
      console.log(res);

      this.order = res;
      this.displayedColumns = res.columns;
      // this.dataSourceForNotReturnedBook = res.notReturnedBook;
      // this.dataSourceForNotReturnedBook = new MatTableDataSource<any>(
      //   res.notReturnedBook
      // );
      setTimeout(() => {
        this.hideNR = true;
        this.dataSourceForNotReturnedBook = new MatTableDataSource<any>(
          res.notReturnedBook
        );
        this.dataSourceForNotReturnedBook.paginator = this.NotReturned;
        this.cd.markForCheck();
        this.cd.detectChanges();
      }, 1000);
      setTimeout(() => {
        this.hideRB = true;
        this.cd.markForCheck();
        this.cd.detectChanges();
        this.dataSourceForReturnedBook = new MatTableDataSource<any>(
          res.returnedBook
        );

        this.dataSourceForReturnedBook.paginator = this.ReturnedBook;
        this.cd.markForCheck();
        this.cd.detectChanges();
      }, 1000);
    });
  }

  Edit(row: any) {
    console.log(row);
    const dialogRef = this.dialog.open(ReturnBookComponent, {
      data: {
        userId: row.userId,
        bookId: row.bookId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //      console.log('The dialog was closed');
      this, this.getOrder();
    });
  }
  filterChange(data: Event, dataSource: any) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSourceForNotReturnedBook.filter = value;
  }

  ngOnInit(): void {
    this.getOrder();
    this.currentUrl = this.router.url;
  }
}
