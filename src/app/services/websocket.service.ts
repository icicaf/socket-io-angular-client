import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('connected to server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('disconnect to server');
      this.socketStatus = false;
    });
  }

  // Emit events
  emit(event: string, payload?: any, callback?: Function) {
    console.log('emit message');
    this.socket.emit(event, payload, callback);
  }

  // Listen events
  listen(event: string) {
    return this.socket.fromEvent(event);
  }
}
