import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './layout/nagivation/navigation.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './view/home/home.component';
import { RegularUserComponent } from './regular-user/regular-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user',
    component: RegularUserComponent,
    children: [
      {
        path: 'my-membership',
        loadChildren: () =>
          import('./regular-user/my-membership/my-membership.module').then(
            (m) => m.MyMembershipModule
          ),
      },
      {
        path: 'my-orders',
        loadChildren: () =>
          import('./regular-user/my-order/my-order.module').then(
            (m) => m.MyOrderModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: NavigationComponent,
    children: [
      {
        path: 'book',
        loadChildren: () =>
          import('./view/book/book.module').then((m) => m.BookModule),
        canActivate: [AuthGuard],
      },

      {
        path: 'users',
        loadChildren: () =>
          import('./view/users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'add-membership',
        loadChildren: () =>
          import('./view/membership/membership.module').then(
            (m) => m.MembershipModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'issue-book',
        loadChildren: () =>
          import('./view/issue-book/issue-book.module').then(
            (m) => m.IssueBookModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'view-order',
        loadChildren: () =>
          import('./view/view-order/view-order.module').then(
            (m) => m.ViewOrderModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'view-membership',
        loadChildren: () =>
          import('./view/view-membership/view-membership.module').then(
            (m) => m.ViewMembershipModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'invoce',
        loadChildren: () =>
          import('./view/invoice/invoice.module').then((m) => m.InvoiceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
