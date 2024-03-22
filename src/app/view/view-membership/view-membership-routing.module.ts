import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMembershipComponent } from './view-membership.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMembershipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMembershipRoutingModule {}
