import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftpaneComponent } from './components/dashboard/leftpane/leftpane.component';
import { MainpaneComponent } from './components/dashboard/mainpane/mainpane.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftpaneComponent,
    MainpaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
