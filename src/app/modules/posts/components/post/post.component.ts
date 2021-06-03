import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../components/app/interfaces/post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate([this.post.id],{relativeTo:this.activatedRoute, state:this.post})
  }

  showAllComments() {
    this.router.navigate([this.post.id,'comments'], {relativeTo: this.activatedRoute, state: this.post})
  }
}
