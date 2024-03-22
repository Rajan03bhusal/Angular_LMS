import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormComponent } from './users-form/users-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  userList: any;
  searchData: string = '';
  currentUrl: string = '';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private user: UsersService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  getUser() {
    let json = {};
    this.user.getUser(json).subscribe((res) => {
      this.userList = res;
      this.displayedColumns = res.column;
      this.userList = res;
      this.displayedColumns = res.column;
      // this.dataSource = res.data;
      // console.log(res);

      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.paginator = this.paginator;
    });
  }
  Search() {
    console.log(this.searchData);

    this.dataSource = this.userList.data.filter((item: any) => {
      return Object.values(item).some((val: any) =>
        val.toString().toLowerCase().includes(this.searchData.toLowerCase())
      );
    });
  }

  Add() {
    const dialogRef = this.dialog.open(UsersFormComponent, {
      data: { data: 'abc', mode: 'Add' },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.getUser();
    });
  }

  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  ngOnInit(): void {
    this.getUser();
    this.currentUrl = this.router.url;
  }
}
