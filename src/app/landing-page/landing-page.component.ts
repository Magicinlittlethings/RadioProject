import { faCoffee, faMagnifyingGlass, faPlay, faHome, faMessage, faUser, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faBell,   } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  faBell = faBell;
  faSearch = faMagnifyingGlass;
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
