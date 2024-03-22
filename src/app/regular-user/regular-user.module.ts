import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularUserRoutingModule } from './regular-user-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { RegularUserComponent } from './regular-user.component';
import { RegularUserService } from './regular-user.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [RegularUserComponent],
  imports: [CommonModule, RegularUserRoutingModule, MaterialModule],
})
export class RegularUserModule {}
