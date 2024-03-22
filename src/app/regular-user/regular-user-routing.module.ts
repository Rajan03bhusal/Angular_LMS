import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegularUserComponent } from './regular-user.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularUserRoutingModule {}
