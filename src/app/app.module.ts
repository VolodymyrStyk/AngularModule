import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {UserDetailsComponent} from './components/comment/user-details/user-details.component';
import {PostDetailsComponent} from './components/comment/post-details/post-details.component';
import {DeactivatorService} from "./services/deactivator.service";
import {ResolveService} from "./services/resolve.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate:[DeactivatorService]},
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDetailsComponent,

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
