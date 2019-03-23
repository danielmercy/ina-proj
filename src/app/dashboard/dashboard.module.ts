import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ManagerComponent } from './manager/manager.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StatisticsComponent, ProfileComponent, SettingsComponent, ManagerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
