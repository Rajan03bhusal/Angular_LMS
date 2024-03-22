import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueBookRoutingModule } from './issue-book-routing.module';
import { IssueBookComponent } from './issue-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { IssueBookFormComponent } from './issue-book-form/issue-book-form.component';

@NgModule({
  declarations: [IssueBookComponent, IssueBookFormComponent],
  imports: [CommonModule, IssueBookRoutingModule, MaterialModule, FormsModule],
})
export class IssueBookModule {}
