import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      {
        path: 'stats/:id',
        component: StatisticsComponent,
      },{
        path: 'profile/:id',
        component: ProfileComponent
      },{
        path: 'settings/:id',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
