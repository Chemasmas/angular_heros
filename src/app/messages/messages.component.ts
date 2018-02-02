import { Component, OnInit } from '@angular/core';
import {MesessageService} from '../mesessage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MesessageService) { }

  ngOnInit() {
  }

}
