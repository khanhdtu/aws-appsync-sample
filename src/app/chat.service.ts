import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';

import { createMessage } from '../graphql/mutations';
import { listMessages } from '../graphql/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages = new BehaviorSubject<any>([]);
  constructor(public userService: UsersService) {
    this.getChatList();
    this.onNewChatSubscription();
  }

  async getChatList(): Promise<void> {
    const messages = (await API.graphql({ query: listMessages })) as any;
    const { items } = messages.data.listMessages;
    if (items) {
      this.messages.next(items);
    }
  }

  async createChat(input): Promise<void> {
    await API.graphql({ query: createMessage, variables: { input }});
  }

  async onNewChatSubscription(): Promise<void> {
    const subscription = (await API.graphql(
      graphqlOperation(onCreateMessage)
    )) as any;
    subscription.subscribe((res) => {
      // tslint:disable-next-line:no-shadowed-variable
      const { onCreateMessage } = res.value.data;
      console.log('onCreateMessage', onCreateMessage);
      const messages = this.messages.getValue();
      messages.unshift(onCreateMessage);
    });
  }
}
