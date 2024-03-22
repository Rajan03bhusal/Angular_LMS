import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMembershipRoutingModule } from './view-membership-routing.module';
import { ViewMembershipService } from './view-membership.service';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ViewMembershipComponent } from './view-membership.component';

@NgModule({
  declarations: [ViewMembershipComponent],
  imports: [CommonModule, ViewMembershipRoutingModule, MaterialModule],
  providers: [ViewMembershipService],
})
export class ViewMembershipModule {}
