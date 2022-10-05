import { Component, OnInit } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  faArrow = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
