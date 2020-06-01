import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { PerscriptionsStub } from './stub';

@Component({
  selector: 'msc-perscriptions',
  templateUrl: './perscriptions.component.html',
  styleUrls: ['./perscriptions.component.scss'],
})
export class PerscriptionsComponent implements OnInit {
  constructor() {}

  @ViewChild('slides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  perscriptionsData = PerscriptionsStub;
  currentSlide = 1;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  ngOnInit() {}

  onSlideChange() {
    this.slides
      .getActiveIndex()
      .then((i) => (this.segments.value = i.toString()));
  }

  onSegmentChanged(ev: any) {
    this.slides.slideTo(ev.detail.value);
    this.currentSlide = ev.detail.value;
  }
}
