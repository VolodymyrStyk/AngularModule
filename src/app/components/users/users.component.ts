import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Post} from "../../interfaces/post";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  posts: Post[];
  usersSelect=new FormGroup({
    id:new FormControl(0),
  });

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  saveChoice() {
    this.userService.getUserPosts(this.usersSelect.controls.id.value).subscribe(value => this.posts = value);
  }
}
