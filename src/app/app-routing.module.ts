import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },{
    path: 'auth/login',
    component: LoginComponent
  },{
    path: 'auth/registration',
    component: RegistrationComponent
  },{
    path: 'manager',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
