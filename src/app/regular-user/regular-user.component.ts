import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegularUserService } from './regular-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regular-user',
  templateUrl: './regular-user.component.html',
  styleUrls: ['./regular-user.component.scss'],
})
export class RegularUserComponent implements OnInit {
  constructor(private NavItem: RegularUserService, private router: Router) {}
  navigationList: any;
  getNav() {
    let json = {};
    this.NavItem.getNavigationItem(json).subscribe((res) => {
      if (res) {
        this.navigationList = res;
        //console.log(this.navigationList);
      }
    });
  }
  Delete() {
    const user = localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.getNav();
  }
}
