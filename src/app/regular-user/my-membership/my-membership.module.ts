import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMembershipRoutingModule } from './my-membership-routing.module';
import { MyMembershipComponent } from './my-membership.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [MyMembershipComponent],
  imports: [CommonModule, MyMembershipRoutingModule, MaterialModule],
})
export class MyMembershipModule {}
