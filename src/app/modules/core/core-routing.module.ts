import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../../_guards';
import {CoreComponent} from './core.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CustomerComponent} from './components/customer/customer.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'customer'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'customer', component: CustomerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
