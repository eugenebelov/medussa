import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msc-appointement-item',
  templateUrl: './appointement-item.component.html',
  styleUrls: ['./appointement-item.component.scss'],
})
export class AppointementItemComponent implements OnInit {
  constructor() {}

  private currentDate;

  @Input() title: string;
  @Input() location: string;
  @Input() doctor: string;
  @Input() clinic: string;

  @Input()
  set date(value: string) {
    const v = new Date(value);
    this.currentDate = v.toLocaleDateString('en', {
      day: '2-digit',
      month: 'long',
    });
  }

  ngOnInit() {}
}
