import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLogin: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
