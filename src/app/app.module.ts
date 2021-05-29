import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersWithAddComponent } from './components/users-with-add/users-with-add.component';
import { UserWithAddComponent } from './components/user-with-add/user-with-add.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersWithAddComponent,
    UserWithAddComponent,
    CarsComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
