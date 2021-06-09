import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {UserService} from "./services/user.service";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [UserService]
})
export class UserModule { }
