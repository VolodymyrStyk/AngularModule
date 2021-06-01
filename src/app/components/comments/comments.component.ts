import {Component, OnInit} from '@angular/core';
import {Comments} from "../../models/Comments";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.data);
    this.activatedRoute.data.subscribe(value => this.comments = value.data)
  }

  ngOnInit(): void {
  }

}
