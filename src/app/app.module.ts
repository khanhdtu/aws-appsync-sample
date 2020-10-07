import 'moment';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Amplify from 'aws-amplify';
import { MomentModule } from 'ngx-moment';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

import awsconfig from '../aws-exports';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { UsersService } from './users.service';
import { SortPipe } from './sort.pipe';

Amplify.configure(awsconfig);

// import { CheckboxModule } from 'primeng/checkbox';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { RippleModule } from 'primeng/ripple';
// import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [AppComponent, ChatRoomComponent, SortPipe],
  imports: [
    BrowserModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    MomentModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
