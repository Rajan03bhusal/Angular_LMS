import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMembershipComponent } from '../my-membership/my-membership.component';
import { MyOrderComponent } from './my-order.component';

const routes: Routes = [
  {
    path: '',
    component: MyOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOrderRoutingModule {}
