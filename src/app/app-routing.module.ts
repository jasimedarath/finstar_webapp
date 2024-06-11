import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplateComponent } from './components/template/template.component';
import { PageNotFoundComponent } from 'src/common-lib/components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'home', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'logout', component: DashboardComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', component: TemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
