import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';

import { createUser, updateUser } from '../graphql/mutations';
import { getUserByName, listUsers } from '../graphql/queries';
import { onCreateUser, onUpdateUser } from '../graphql/subscriptions';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user = new BehaviorSubject<User>(this.getCurrentUser());
  users = new BehaviorSubject<[]>([]);
  constructor() {
    this.onCreateSubscription();
    this.onUpdateSubscription();
  }

  async getUsers(): Promise<void> {
    const users = (await API.graphql({ query: listUsers })) as any;
    const { items } = users.data.listUsers;
    if (items) {
      this.users.next(items);
    }
  }

  async getUser(name): Promise<void> {
    const res = (await API.graphql(
      graphqlOperation(getUserByName, { name })
    )) as any;
    const { items } = res.data.getUserByName;
    if (items.length) {
      this.setCurrentUser(items[0]);
      return;
    }
    this.createUser(name);
  }

  async createUser(username: string): Promise<void> {
    const input = { name: username, online: 'ONLINE' };
    const newUser = (await API.graphql({
      query: createUser,
      variables: { input },
    })) as any;
    if (newUser && newUser.data) {
      this.setCurrentUser(newUser.data.createUser);
    }
  }

  async updateUser(input): Promise<any> {
    const updating = (await API.graphql({
      query: updateUser,
      variables: { input },
    })) as any;
    if (updating && updating.data) {
      this.user.next(updating.data.updateUser);
    }
  }

  async outRoom(): Promise<void> {
    try {
      const id = this.user.getValue().id;
      const input = { id, online: 'OFFLINE' };
      await this.updateUser(input);
      localStorage.removeItem('User');
      this.user.next(null);
    } catch (error) {
      localStorage.removeItem('User');
      this.user.next(null);
    }
  }

  onCreateSubscription(): Promise<void> {
    const subscription = API.graphql(graphqlOperation(onCreateUser)) as any;
    return subscription.subscribe((user) => {
      // tslint:disable-next-line:no-shadowed-variable
      const { onCreateUser } = user.value.data;
      const users = this.users.getValue() as any;
      users.unshift(onCreateUser);
      this.users.next(users);
    });
  }

  onUpdateSubscription(): Promise<void> {
    const subscription = API.graphql(graphqlOperation(onUpdateUser)) as any;
    return subscription.subscribe((user) => {
      // tslint:disable-next-line:no-shadowed-variable
      const { onUpdateUser } = user.value.data;
      const users = this.users.getValue() as any;
      const index = users.findIndex((e) => e.id === onUpdateUser.id);
      users[index] = onUpdateUser;
      this.users.next(users);
    });
  }

  setCurrentUser(user): void {
    this.user.next(user);
    localStorage.setItem('User', JSON.stringify(user));
    const input = { id: user.id, online: 'ONLINE' };
    this.updateUser(input);
  }

  getCurrentUser(): User {
    const user = JSON.parse(localStorage.getItem('User'));
    if (user) {
      return user;
    }
    return null;
  }
}
