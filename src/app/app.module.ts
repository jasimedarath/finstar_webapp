import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftpaneComponent } from './components/dashboard/leftpane/leftpane.component';
import { MainpaneComponent } from './components/dashboard/mainpane/mainpane.component';
import { TemplateComponent } from './components/template/template.component';
import { TableComponent } from "../common-lib/components/table/table.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LeftpaneComponent,
        MainpaneComponent,
        TemplateComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TableComponent
    ]
})
export class AppModule { }
