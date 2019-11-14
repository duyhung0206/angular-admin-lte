import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {CoreComponent} from './core.component';
import {AppheaderComponent} from '../../layout/appheader/appheader.component';
import {AppmenuComponent} from '../../layout/appmenu/appmenu.component';
import {AppfooterComponent} from '../../layout/appfooter/appfooter.component';
import {AppsettingComponent} from '../../layout/appsetting/appsetting.component';
import {CustomerComponent} from './components/customer/customer.component';
import {ProductComponent} from './components/product/product.component';
import {OrderComponent} from './components/order/order.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    CoreComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
    DashboardComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {
}
