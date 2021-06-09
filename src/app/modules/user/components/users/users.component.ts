import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userDetails: User;

  constructor(private userService: UserService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => this.users = user);
  }

  userDetail(details: User) {
    this.userDetails = details;
  }
}
