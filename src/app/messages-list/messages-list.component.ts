import { Component, OnInit } from '@angular/core';
import {  faArrowLeft} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
 faArrow = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
