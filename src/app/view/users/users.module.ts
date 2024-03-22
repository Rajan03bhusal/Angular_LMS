import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersFormComponent, UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MaterialModule, FormsModule],
  providers: [UsersService],
})
export class UsersModule {}
