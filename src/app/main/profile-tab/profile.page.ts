import {Component, ViewChild} from '@angular/core';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'msc-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  @ViewChild('myNav') nav: NavController;
  public details = ProfileDetailsComponent;
  constructor() {}
}
