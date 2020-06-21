import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msc-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  techs = [
    {
      title: 'My Doctors',
      icon: 'angular',
      description:
        'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      color: '#E63135',
    },
    {
      title: 'Medical records',
      icon: 'css3',
      description:
        'The latest version of cascading stylesheets - the styling language of the web!',
      color: '#0CA9EA',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
