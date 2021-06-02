import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';

let routes:Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [{
      path: ':id', component: UserDetailsComponent,
    }]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
