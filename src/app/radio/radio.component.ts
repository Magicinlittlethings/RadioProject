import { faPause, faArrowLeft, faPlay, faWifi} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import {   } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  faPause = faPause;
  faArrow = faArrowLeft;
  faPlay = faPlay;
  faWifi = faWifi;
  play=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.play = !this.play
  }

}
