import { ChangeDetectorRef, Component } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';
  currentUser;
  constructor(private ref: ChangeDetectorRef, public userSerive: UsersService) {
    this.currentUser = userSerive.user.asObservable();
    this.userSerive.getUsers();
  }

  onClick = async () => {
    console.log(this.username);
    if (this.username) {
      await this.userSerive.getUser(this.username);
      return;
    }
    alert('Please input your name');
  }
}
