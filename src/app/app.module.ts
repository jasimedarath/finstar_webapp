import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftpaneComponent } from  './components/leftpane/leftpane.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateContainerComponent } from "../common-lib/components/template-container/template-container.component";
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LeftpaneComponent,
        TemplateComponent,
        SettingsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TemplateContainerComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
