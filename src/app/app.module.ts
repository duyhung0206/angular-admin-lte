import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './layout/appheader/appheader.component';
import { AppmenuComponent } from './layout/appmenu/appmenu.component';
import { AppfooterComponent } from './layout/appfooter/appfooter.component';
import { AppsettingComponent } from './layout/appsetting/appsetting.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
