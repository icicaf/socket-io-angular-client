import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'basic';

  constructor(
    public WebsocketService: WebsocketService,
    public ChatService: ChatService
  ) {}

  ngOnInit() {
    this.ChatService.sendMessage('Hi from angular');
  }
}
