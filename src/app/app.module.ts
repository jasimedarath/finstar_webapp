import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from '../app/interceptors/error-handling.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeftpaneComponent } from  './components/leftpane/leftpane.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateContainerComponent } from "../common-lib/components/template-container/template-container.component";
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LeftpaneComponent,
        TemplateComponent,
        SettingsComponent,
        HomeComponent,
    ],
    providers: [
        provideHttpClient(),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorHandlingInterceptor,
          multi: true,
        },
      ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TemplateContainerComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
