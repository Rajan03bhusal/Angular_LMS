import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnBookComponent } from './return-book.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReturnBookService } from './return-book.service';

@NgModule({
  declarations: [ReturnBookComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [ReturnBookService],
})
export class ReturnBookModule {}
