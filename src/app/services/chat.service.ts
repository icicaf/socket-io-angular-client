import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public WebsocketService: WebsocketService) {}

  sendMessage(message: string): void {
    const payload = {
      from: 'Cristian',
      body: message,
    };

    this.WebsocketService.emit('message', payload);
  }

  getMessage() {
    return this.WebsocketService.listen('new-message');
  }
}
