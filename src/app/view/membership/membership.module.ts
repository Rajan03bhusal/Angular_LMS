import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { MembershipService } from './membership.service';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MembershipComponent, MembershipFormComponent],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MembershipService],
})
export class MembershipModule {}
