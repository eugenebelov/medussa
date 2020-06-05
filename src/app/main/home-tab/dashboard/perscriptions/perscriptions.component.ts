import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { PerscriptionsStub } from './stub';
import { Appointments } from '../../../appointments-tab/stub';
import { CurrentComponent } from '../../../appointments-tab/current/current.component';
import { PastComponent } from '../../../appointments-tab/past/past.component';
import { PerscriptionDetailComponent } from './perscription-detail/perscription-detail.component';

@Component({
  selector: 'msc-perscriptions',
  templateUrl: './perscriptions.component.html',
  styleUrls: ['./perscriptions.component.scss'],
})
export class PerscriptionsComponent implements OnInit {
  constructor() {}

  slides = [
    {
      ...PerscriptionsStub[0],
      component: PerscriptionDetailComponent,
    },
    {
      ...PerscriptionsStub[1],
      component: PerscriptionDetailComponent,
    },
    {
      ...PerscriptionsStub[2],
      component: PerscriptionDetailComponent,
    },
  ];

  ngOnInit() {}
}
