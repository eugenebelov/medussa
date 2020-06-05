import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { SlideDirective } from './slide.directive';

interface ISegmentSlide {
  type: number;
  label: string;
  data: [];
  component?: any;
}

export interface ISegmentSlideItem {
  data?: any;
}

@Component({
  selector: 'msc-segments-slide',
  templateUrl: './segments-slide.component.html',
  styleUrls: ['./segments-slide.component.scss'],
})
export class SegmentsSlideComponent implements OnInit, AfterViewInit {
  currentSlide = 1;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  allSlides = [];

  @Input() segmentsData: ISegmentSlide[];

  @ViewChild(SlideDirective, { static: true }) adSlide: SlideDirective;

  @ViewChild('slides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const compFactory = this.resolver.resolveComponentFactory(
      this.segmentsData[this.currentSlide].component
    );
    const viewRef = this.adSlide.viewContainer;
    viewRef.clear();

    const compRef = viewRef.createComponent(compFactory);
    (compRef.instance as ISegmentSlideItem).data = this.segmentsData[
      this.currentSlide
    ].data;
  }

  ngAfterViewInit() {
    // this.slideContainer.clear();
    // this.allSlides = this.segmentsData.map((segment) => {
    //   const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(
    //       segment.component
    //   );
    //   return this.slideContainer.createComponent(factory);
    // });
    //
    // console.log(this.allSlides);
  }

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
