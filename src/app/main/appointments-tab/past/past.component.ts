import { Component, Input, OnInit } from '@angular/core';
import { ISegmentSlideItem } from '../../../common/segments-slide/segments-slide.component';
import { ISlide } from '../stub';

@Component({
  selector: 'msc-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss'],
})
export class PastComponent implements OnInit, ISegmentSlideItem<ISlide> {
  constructor() {}

  @Input() data;

  ngOnInit() {}
}
