import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';

interface ISegmentSlide {
  type: number;
  label: string;
  data: [];
  component?: any;
}

export interface ISegmentSlideItem<T> {
  data: T[];
}

@Component({
  selector: 'msc-segments-slide',
  templateUrl: './segments-slide.component.html',
  styleUrls: ['./segments-slide.component.scss'],
})
export class SegmentsSlideComponent implements OnInit, AfterViewInit {
  currentSlide = 0;

  slideOpts = {
    initialSlide: this.currentSlide,
    speed: 400,
  };

  @Input() segmentsData: ISegmentSlide[];
  @Input() lockedSwipe = false;

  @ViewChild('slides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  constructor() {}

  ngOnInit() {
    // this.slides.lockSwipes(this.lockedSwipe);
  }

  ngAfterViewInit(): void {
    this.slides.lockSwipes(this.lockedSwipe);
  }

  onSlideChange() {
    this.slides.getActiveIndex().then((i) => {
      this.segments.value = i.toString();
    });
  }

  onSegmentChanged(ev: any) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(ev.detail.value).then(() => {
      this.slides.lockSwipes(this.lockedSwipe);
    });
    this.currentSlide = ev.detail.value;
  }
}
