import { Component, Input, OnInit } from '@angular/core';
import { ISegmentSlideItem } from '../../../common/segments-slide/segments-slide.component';

@Component({
  selector: 'msc-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss'],
})
export class PastComponent implements OnInit, ISegmentSlideItem {
  constructor() {}

  @Input() data: any;

  ngOnInit() {}
}
