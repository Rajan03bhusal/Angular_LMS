import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewMembershipService } from './view-membership.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-membership',
  templateUrl: './view-membership.component.html',
  styleUrls: ['./view-membership.component.scss'],
})
export class ViewMembershipComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  customerMemberShipList: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private List: ViewMembershipService) {}

  getList() {
    let json = {};
    this.List.getCustomerMemberShipList(json).subscribe((res) => {
      if (res) {
        this.customerMemberShipList = res;
        this.displayedColumns = res.column;
        // this.dataSource = res.data;
        // console.log(res);

        this.dataSource = new MatTableDataSource<any>(res.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngOnInit(): void {
    this.getList();
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
