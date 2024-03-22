import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  invoiceList: any;
  currentUrl: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private invoice: InvoiceService) {}

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice() {
    let json = {};
    this.invoice.getInvoice(json).subscribe((res) => {
      this.invoiceList = res;
      this.displayedColumns = res.columns;
      this.dataSource = new MatTableDataSource<any>(res.data);
      this.dataSource.paginator = this.paginator;
      console.log(res);
    });
  }
  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
