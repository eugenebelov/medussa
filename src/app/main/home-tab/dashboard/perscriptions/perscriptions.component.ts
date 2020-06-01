import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PerscriptionsStub } from './stub';

@Component({
  selector: 'msc-perscriptions',
  templateUrl: './perscriptions.component.html',
  styleUrls: ['./perscriptions.component.scss'],
})
export class PerscriptionsComponent implements OnInit {
  constructor() {}

  @ViewChild('slides') slides: IonSlides;

  perscriptionsData = PerscriptionsStub;
  currentSlide = 1;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.slides.slideTo(ev.detail.value);
    this.currentSlide = ev.detail.value;
  }
}
