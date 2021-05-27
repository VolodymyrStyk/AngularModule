import {Component, Input, OnInit} from '@angular/core';
import {UserComments} from "../../models/UserComments";

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  @Input('comment')
  userComment: UserComments;

  constructor() {
  }

  ngOnInit(): void {
  }

}
