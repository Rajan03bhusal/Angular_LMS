import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ViewOrderComponent],
  imports: [CommonModule, ViewOrderRoutingModule, FormsModule, MaterialModule],
  providers: [],
})
export class ViewOrderModule {}
