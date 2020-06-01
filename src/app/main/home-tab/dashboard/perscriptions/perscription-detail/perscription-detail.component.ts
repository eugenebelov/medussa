import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'msc-perscription-detail',
  templateUrl: './perscription-detail.component.html',
  styleUrls: ['./perscription-detail.component.scss'],
})
export class PerscriptionDetailComponent implements OnInit {
  @Input() label: string;
  @Input() details: any[];

  constructor() {}

  ngOnInit() {}
}
