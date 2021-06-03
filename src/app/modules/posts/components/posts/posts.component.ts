import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(post => this.posts = post);
  }

}
