import { Component, Input, OnInit } from '@angular/core';
import { ISegmentSlideItem } from '../../../common/segments-slide/segments-slide.component';

@Component({
  selector: 'msc-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit, ISegmentSlideItem {
  constructor() {}

  @Input() data: any;

  ngOnInit() {}
}
