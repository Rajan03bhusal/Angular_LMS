import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { MyOrderComponent } from './my-order.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [MyOrderComponent],
  imports: [CommonModule, MyOrderRoutingModule, MaterialModule],
})
export class MyOrderModule {}
