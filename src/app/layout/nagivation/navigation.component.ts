import { Component, OnInit } from '@angular/core';
import { NagivationService } from './nagivation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/view/book/book.service';
import { ReturnBookService } from 'src/app/view/return-book/return-book.service';
import { ViewMembershipService } from 'src/app/view/view-membership/view-membership.service';
import { ViewOrderService } from 'src/app/view/view-order/view-order.service';
import { UsersService } from 'src/app/view/users/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navigationList: any = [];
  userType: string = '';
  totalUser: Number = 0;
  totalIssuedBook: Number = 0;
  totalBook: Number = 0;
  totalRevenue: Number = 0;
  // countCount: Number = 0;
  // countNotBook: number = 0;
  // countUser: Number = 0;
  startDate: string = '2024-01-01';
  endDate: Date = new Date();
  constructor(
    public NavItem: NagivationService,
    private route: ActivatedRoute,
    private router: Router,
    private book: BookService,
    private bookReturn: ViewOrderService,
    private users: UsersService
  ) {}

  getNav() {
    let json = {};
    this.NavItem.getNavigationItem(json).subscribe((res) => {
      if (res) {
        this.navigationList = res;
        //console.log(this.navigationList);
      }
    });
  }

  getTotalCount() {
    let json = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.NavItem.getTotalcount(json).subscribe((res) => {
      console.log(res);
      // console.log(res);
      if (res.length > 0) {
        const counts = res[0];
        this.totalBook = counts.totalBooks;
        this.totalUser = counts.totalUser;
        this.totalIssuedBook = counts.totalIssuedBooks;
        this.totalRevenue = counts.totalRevenue;
      }
    });
  }
  filterByDate() {
    let json = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.NavItem.getTotalcount(json).subscribe((res) => {
      if (res.length > 0) {
        const counts = res[0];
        this.totalBook = counts.totalBooks;
        this.totalUser = counts.totalUser;
        this.totalIssuedBook = counts.totalIssuedBooks;
        this.totalRevenue = counts.totalRevenue;
      }
    });
  }
  Delete() {
    const user = localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  // countBook() {
  //   let json = {};
  //   this.book.getBook(json).subscribe((res) => {
  //     this.countBook = res.data.length;
  //     //  console.log(res);
  //   });
  // }
  // countNotReturnBook() {
  //   let json = {};
  //   this.bookReturn.getOrder(json).subscribe((res) => {
  //     this.countNotBook = res.notReturnedBook.length;
  //   });
  // }
  // countTotalUser() {
  //   let json = {};
  //   this.users.getUser(json).subscribe((res) => {
  //     this.countUser = res.data.length;
  //   });
  // }
  isBookRoute(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'book';
  }
  isUsersRoute(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'users';
  }

  isMemberRoute(): boolean {
    return (
      this.route.snapshot.firstChild?.routeConfig?.path === 'add-membership'
    );
  }
  isIssueBookRoute(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'issue-book';
  }

  isViewOrderRoute(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'view-order';
  }
  isViewMemberShipRoute(): boolean {
    return (
      this.route.snapshot.firstChild?.routeConfig?.path === 'view-membership'
    );
  }
  isInvoiceRoute(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'invoce';
  }

  ngOnInit(): void {
    this.getNav();
    // this.countBook();
    // this.countNotReturnBook();
    // this.countTotalUser();
    this.getTotalCount();
    this.filterByDate();
  }
}
