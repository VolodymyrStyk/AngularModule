import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(module=> module.UsersModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(module=> module.PostsModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
