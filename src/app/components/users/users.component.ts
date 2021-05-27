import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {usersData} from "../data/userData";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = usersData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
