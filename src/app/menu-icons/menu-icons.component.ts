import { Component, OnInit } from '@angular/core';
import {  faHome, faMessage, faGear, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent implements OnInit {
  faHome = faHome;
  faMessage = faMessage;
  faGear = faGear;
  faWifi = faWifi;
  constructor() { }

  ngOnInit(): void {
  }

}
