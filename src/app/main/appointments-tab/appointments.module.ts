import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsPage } from './appointments.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AppointmentsPageRoutingModule } from './appoinements-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AppointmentsPageRoutingModule,
  ],
  declarations: [AppointmentsPage],
})
export class AppointmentsPageModule {}
