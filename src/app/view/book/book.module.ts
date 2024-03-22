import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { BookComponent } from './book.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';

@NgModule({
  declarations: [BookFormComponent, BookComponent],
  imports: [CommonModule, BookRoutingModule, MaterialModule, FormsModule],
  providers: [BookService],
})
export class BookModule {}
