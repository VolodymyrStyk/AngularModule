import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../components/app/interfaces/post";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UsersService) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserPosts(params.id).subscribe(value => {
        this.posts = value;
      })
    })

  }

  ngOnInit(): void {
  }

}
