import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { SlideDirective } from './slide.directive';
import { ISlide } from '../../main/appointments-tab/stub';

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

  @ViewChild('slides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  onSlideChange() {
    this.slides.getActiveIndex().then((i) => {
      this.segments.value = i.toString();
    });
  }

  onSegmentChanged(ev: any) {
    this.slides.slideTo(ev.detail.value);
    this.currentSlide = ev.detail.value;
  }
}
