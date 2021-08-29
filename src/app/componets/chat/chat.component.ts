import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  textMessage = '';
  messageSubcriptions: any = Subscription;
  elementHtml: any = HTMLElement;

  messages: any[] = [];

  constructor(public chatService: ChatService) {}

  ngOnInit() {
    this.elementHtml = document.getElementById('chat-messages');

    this.messageSubcriptions = this.chatService.getMessage().subscribe(msg => {
      console.log(msg);
      this.messages.push(msg);

      setTimeout(() => {
        this.elementHtml.scrollTop = this.elementHtml.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy() {
    this.messageSubcriptions.unsubscribe();
  }

  sendMessage() {
    console.log(this.textMessage);

    if (this.textMessage.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.textMessage);
    this.textMessage = '';
  }
}
