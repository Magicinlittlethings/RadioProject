import { Component, OnInit } from '@angular/core';
import {  faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message-info',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.css']
})
export class MessageInfoComponent implements OnInit {
 faArrow = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
