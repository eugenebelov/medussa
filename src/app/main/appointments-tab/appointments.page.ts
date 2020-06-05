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
      data: Appointments,
      component: CurrentComponent,
      tmpl: '<msc-current></msc-current>'
    },
    {
      type: 1,
      label: 'Past',
      data: Appointments,
      component: PastComponent,
      tmpl: '<msc-past></msc-past>'
    },
  ];
}
