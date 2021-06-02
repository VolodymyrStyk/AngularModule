import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);

  }

}
