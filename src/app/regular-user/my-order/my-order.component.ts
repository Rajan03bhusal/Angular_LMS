import { Component, OnInit } from '@angular/core';
import { MyOrderService } from './my-order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {
  dataSourceForBook: any;
  bookList: any;
  displayedColumns: string[] = [];
  dataSource: any;

  constructor(private orderService: MyOrderService) {}

  getOrder() {
    const userDataString = localStorage.getItem('user');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.res[0].userId;
      let json = {
        userId: userId,
      };
      this.orderService.getOrderById(json).subscribe(
        (res) => {
          this.bookList = res.notReturnedBook;
          this.displayedColumns = res.columns;
          this.dataSource = res.returnedBook;
          //  console.log(res);
        },
        (error) => {
          console.error('Error fetching orders:', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.getOrder();
  }
}
