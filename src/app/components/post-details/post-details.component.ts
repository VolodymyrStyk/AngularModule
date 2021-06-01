import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(private router: Router, private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
          if (!this.router.getCurrentNavigation()?.extras.state){
            this.postService.getPost(params.id).subscribe(value => this.post = value);
          }
          this.post = this.router.getCurrentNavigation()?.extras.state as Post;
        });
  }


  ngOnInit(): void {
  }

}
