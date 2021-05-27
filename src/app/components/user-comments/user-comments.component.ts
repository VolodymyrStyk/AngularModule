import {Component, OnInit} from '@angular/core';
import {UserComments} from "../../models/UserComments";
import {HttpClient} from "@angular/common/http";
import {UserCommentService} from "../../services/user-comment.service";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {
  usersComments: UserComments[] = [];

  constructor(private userCommentService: UserCommentService) {
  }

  ngOnInit(): void {
    this.userCommentService.getCommets().subscribe(value => {
      this.usersComments = value;
    })
  }

}
