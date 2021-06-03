import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../components/app/interfaces/post";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  @Input()
  post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
