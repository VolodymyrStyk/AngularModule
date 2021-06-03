import {Component, OnInit} from '@angular/core';
import {CommentModel} from "../../../../components/app/interfaces/comment-model";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  comments: CommentModel[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    this.activatedRoute.params.subscribe(params => {
      this.postsService.getPostComments(params.id).subscribe(value => {
        this.comments = value;
      })
    })
  }

  ngOnInit(): void {
  }

}
