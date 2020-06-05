import { Component } from '@angular/core';
import { Appointments } from './stub';
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';

@Component({
  selector: 'msc-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss'],
})
export class AppointmentsPage {
  constructor() {}

  slides = [
    {
      type: 0,
      label: 'Current',
      data: [],
      component: CurrentComponent,
    },
    {
      type: 1,
      label: 'Past',
      data: [],
      component: PastComponent,
    },
  ];
}
