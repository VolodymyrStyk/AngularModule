import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostCommentsComponent} from "./components/post-comments/post-comments.component";

const routes: Routes = [
  {path: '', component: PostsComponent,
  children:[
    {path: ':id', component: PostDetailsComponent},
    {path: ':id/comments', component: PostCommentsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
