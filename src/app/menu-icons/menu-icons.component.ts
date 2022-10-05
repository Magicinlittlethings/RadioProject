import { Component, OnInit } from '@angular/core';
import {  faHome, faMessage, faUser, faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent implements OnInit {
  faHome = faHome;
  faMessage = faMessage;
  faUser = faUser;
  faWifi = faWifi;
  constructor() { }

  ngOnInit(): void {
  }

}
