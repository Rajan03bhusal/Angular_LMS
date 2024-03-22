import { Component, OnInit } from '@angular/core';
import { MyMembershipService } from './my-membership.service';

@Component({
  selector: 'app-my-membership',
  templateUrl: './my-membership.component.html',
  styleUrls: ['./my-membership.component.scss'],
})
export class MyMembershipComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  customerMemberShipList: any;

  constructor(private ms: MyMembershipService) {}

  getmember() {
    const userDataString = localStorage.getItem('user');
    console.log();

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.res[0].userId;
      console.log(userId);

      const json = {
        userId: userId,
      };
      this.ms.getMemberShip(json).subscribe((res) => {
        this.displayedColumns = res.column;
        this.dataSource = res.data;
        console.log(res);
      });
    }
  }

  ngOnInit(): void {
    this.getmember();
  }
}
