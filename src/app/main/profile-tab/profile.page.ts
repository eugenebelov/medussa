import { Component } from '@angular/core';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@Component({
  selector: 'msc-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  details = ProfileDetailsComponent;
  constructor() {}
}
