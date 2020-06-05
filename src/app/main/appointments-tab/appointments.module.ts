import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsPage } from './appointments.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AppointmentsPageRoutingModule } from './appoinements-routing.module';
import { AppointementItemComponent } from './appointement-item/appointement-item.component';
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';
import { CommonUiModule } from '../../common/common-ui.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AppointmentsPageRoutingModule,
    CommonUiModule,
  ],
  declarations: [
    AppointmentsPage,
    AppointementItemComponent,
    CurrentComponent,
    PastComponent,
  ],
})
export class AppointmentsPageModule {}
