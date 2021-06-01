import {Component, OnInit} from '@angular/core';
import {Comments} from "../../models/Comments";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentDet: Comments;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private commentService:CommentsService) {
  this.activatedRoute.params.subscribe(params =>{
    if(!this.router.getCurrentNavigation()?.extras.state){
      this.commentService.getComment(params.id).subscribe(value => this.commentDet = value);
    }else {
      this.commentDet = this.router.getCurrentNavigation()?.extras.state as Comments;
    }
  } )

  }

  ngOnInit(): void {
  }

}
