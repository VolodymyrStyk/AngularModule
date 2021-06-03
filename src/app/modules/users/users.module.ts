import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersService} from "./services/users.service";
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostComponent } from './components/user-post/user-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserPostsComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService,
  ]
})
export class UsersModule {
}
