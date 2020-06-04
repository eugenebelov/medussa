import { Component, OnInit } from '@angular/core';
import { Appointments } from '../stub';

@Component({
  selector: 'msc-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  appointments = Appointments;

  constructor() {}

  ngOnInit() {}
}
