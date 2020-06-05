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

interface ISegmentSlide {
  type: number;
  label: string;
  data: [];
  component?: any;
}

export interface ISegmentSlideItem {
  appointments?: any;
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

  @ViewChildren(SlideDirective) adSlide: QueryList<SlideDirective>;

  @ViewChild('slides') slides: IonSlides;
  @ViewChild('segments') segments: IonSegment;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.slideRender(this.adSlide.toArray(), this.currentSlide);
  }

  onSlideChange() {
    this.slides.getActiveIndex().then((i) => {
      this.segments.value = i.toString();
      this.slideRender(this.adSlide.toArray(), i);
    });
  }

  onSegmentChanged(ev: any) {
    this.slides.slideTo(ev.detail.value);
    this.currentSlide = ev.detail.value;
  }

  private slideRender(slides: SlideDirective[], current: number = 0) {
    const compFactory = this.resolver.resolveComponentFactory(
      this.segmentsData[current].component
    );

    const viewRef = slides[current].viewContainer;
    viewRef.clear();

    const compRef = viewRef.createComponent(compFactory);
    (compRef.instance as ISegmentSlideItem).appointments = this.segmentsData[
      current
    ].data;
  }
}
