import { Component, Input, OnInit } from '@angular/core';
import {ISegmentSlideItem} from '../../../../../common/segments-slide/segments-slide.component';

@Component({
  selector: 'msc-perscription-detail',
  templateUrl: './perscription-detail.component.html',
  styleUrls: ['./perscription-detail.component.scss'],
})
export class PerscriptionDetailComponent implements OnInit, ISegmentSlideItem<any> {
  @Input() label: string;
  @Input() data: any[];

  constructor() {}

  ngOnInit() {}
}
