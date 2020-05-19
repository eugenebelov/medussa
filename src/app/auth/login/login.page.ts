import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onsubmit');
    this.router.navigate(['/tabs']);
  }

}
