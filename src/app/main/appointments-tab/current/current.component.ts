import { Component, Input, OnInit } from '@angular/core';
import { ISegmentSlideItem } from '../../../common/segments-slide/segments-slide.component';
import {ISlide} from '../stub';

@Component({
  selector: 'msc-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit, ISegmentSlideItem<ISlide> {
  constructor() {}

  @Input() data;

  ngOnInit() {}
}
