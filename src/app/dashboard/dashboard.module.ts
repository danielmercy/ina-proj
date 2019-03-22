import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [StatisticsComponent, ProfileComponent, SettingsComponent, ManagerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
