import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './dashboard/appointment/appointment.component';
import { HealthstatusComponent } from './dashboard/healthstatus/healthstatus.component';
import { PerscriptionsComponent } from './dashboard/perscriptions/perscriptions.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    DashboardComponent,
    AppointmentComponent,
    HealthstatusComponent,
    PerscriptionsComponent,
  ],
})
export class HomePageModule {}
