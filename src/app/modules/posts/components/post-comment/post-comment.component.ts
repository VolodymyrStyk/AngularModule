import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from "../../../../components/app/interfaces/comment-model";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  @Input()
  comment: CommentModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
