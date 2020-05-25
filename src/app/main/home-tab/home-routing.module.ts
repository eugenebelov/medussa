import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HealthstatusComponent } from './dashboard/healthstatus/healthstatus.component';
import { AppointmentComponent } from './dashboard/appointment/appointment.component';
import { PerscriptionsComponent } from './dashboard/perscriptions/perscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'healthstatus',
    component: HealthstatusComponent,
  },
  {
    path: 'appoinment',
    component: AppointmentComponent,
  },
  {
    path: 'perscriptions',
    component: PerscriptionsComponent,
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
