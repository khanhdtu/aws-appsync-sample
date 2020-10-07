import { Component } from '@angular/core';

import { ChatService } from '../chat.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  public user;
  public users;
  public message;
  public messages;
  constructor(
    public userService: UsersService,
    public chatService: ChatService
  ) {
    this.users = userService.users.asObservable();
    this.messages = this.chatService.messages.asObservable();
    userService.user.asObservable().subscribe((user) => (this.user = user));
  }

  onTypingChat(event): void {
    this.chatService.createChat(
      { message: event.target.value, message_userId: this.user.id }
    );
    this.message = '';
  }

  outRoom(): void {
    this.userService.outRoom();
  }
}
