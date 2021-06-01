import {Component, OnInit} from '@angular/core';
import {Comments} from "../../models/Comments";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[];

  constructor(private commentsService:CommentsService) {
    this.commentsService.getComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
