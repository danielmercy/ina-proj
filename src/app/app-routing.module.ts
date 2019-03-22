import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'manager',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: '',
    component: HomeComponent
  },{
    path: 'auth/login',
    component: LoginComponent
  },{
    path: 'auth/registration',
    component: RegistrationComponent
  },{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
