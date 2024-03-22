import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMembershipComponent } from './my-membership.component';

const routes: Routes = [{ path: '', component: MyMembershipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMembershipRoutingModule {}
