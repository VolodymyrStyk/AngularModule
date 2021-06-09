import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userDetails: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => this.users = user);
  }

  userDetail(details: User) {
    this.userDetails = details;
  }
}
