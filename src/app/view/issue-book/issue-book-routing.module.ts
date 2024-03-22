import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueBookComponent } from './issue-book.component';

const routes: Routes = [{ path: '', component: IssueBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssueBookRoutingModule {}
