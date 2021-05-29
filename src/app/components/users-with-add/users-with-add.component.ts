import {Component, OnInit} from '@angular/core';
import {UserWithAdd} from "../../models/UserWithAdd";
import {usersWithAddressData} from "../../data/usersWithAddData";

@Component({
  selector: 'app-users-with-add',
  templateUrl: './users-with-add.component.html',
  styleUrls: ['./users-with-add.component.css']
})
export class UsersWithAddComponent implements OnInit {
  usersWithAdd: UserWithAdd[];

  constructor() {
  }

  ngOnInit(): void {
    this.usersWithAdd = usersWithAddressData;
  }

}
