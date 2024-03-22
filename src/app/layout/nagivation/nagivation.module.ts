import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule, FormsModule],
})
export class NagivationModule {}
