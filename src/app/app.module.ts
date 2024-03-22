import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NagivationModule } from './layout/nagivation/nagivation.module';
import { HomeComponent } from './view/home/home.component';
import { ReturnBookModule } from './view/return-book/return-book.module';
import { ViewMembershipModule } from './view/view-membership/view-membership.module';
import { RegularUserComponent } from './regular-user/regular-user.component';
import { RegularUserModule } from './regular-user/regular-user.module';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NoopAnimationsModule,
    MaterialModule,
    NagivationModule,
    ReturnBookModule,
    ViewMembershipModule,
    RegularUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
