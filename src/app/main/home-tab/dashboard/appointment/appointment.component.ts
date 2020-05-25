import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-appointment',
  providers: [Calendar],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  constructor(private calendar: Calendar) {}

  public startYear = new Date();

  ngOnInit() {
    this.calendar.createCalendar('appointment').then(
      (msg) => {
        console.log(msg);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addEvent() {
    this.calendar
      .createEvent(
        'DOC',
        'Home',
        '',
        new Date('05/26/2020'),
        new Date('05/26/2020')
      )
      .then((msg) => {
        console.log(msg);
      });
  }
}
