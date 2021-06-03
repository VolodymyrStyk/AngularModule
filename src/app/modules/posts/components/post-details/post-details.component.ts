import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostsService} from "../../services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetails: Post;

  constructor(private postService: PostsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.postDetails = this.router.getCurrentNavigation()?.extras.state as Post;
      } else {
        this.postService.getPost(params.id).subscribe(post => this.postDetails = post);
      }
    })
  }

  ngOnInit(): void {
  }

}
