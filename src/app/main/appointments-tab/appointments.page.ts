import { Component } from '@angular/core';
import { Appointments } from './stub';

@Component({
  selector: 'msc-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss'],
})
export class AppointmentsPage {
  constructor() {}

  appointments = Appointments;
}
