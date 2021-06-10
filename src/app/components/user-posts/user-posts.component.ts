import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input()
  post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
