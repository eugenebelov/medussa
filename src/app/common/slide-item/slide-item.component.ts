import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SlideDirective } from '../segments-slide/slide.directive';
import { ISegmentSlideItem } from '../segments-slide/segments-slide.component';

@Component({
  selector: 'msc-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss'],
})
export class SlideItemComponent implements OnInit, AfterViewInit {
  constructor(private resolver: ComponentFactoryResolver) {}

  @Input() title: string;
  @Input() data;
  @Input() component;

  @ViewChild('cont', { read: ViewContainerRef }) cont: ViewContainerRef;
  @ViewChild(SlideDirective) adSlide: SlideDirective;

  ngOnInit() {}

  ngAfterViewInit(): void {
    const compFactory = this.resolver.resolveComponentFactory(this.component);

    const componentRef = this.cont.createComponent(compFactory);

    (componentRef.instance as ISegmentSlideItem<any>).data = this.data;
  }
}
