import {Component, Input, OnInit} from '@angular/core';
import {UserWithAdd} from "../../models/UserWithAdd";

@Component({
  selector: 'app-user-with-add',
  templateUrl: './user-with-add.component.html',
  styleUrls: ['./user-with-add.component.css']
})
export class UserWithAddComponent implements OnInit {
  @Input('userWithAdd')
  userWithAdd: UserWithAdd;

  constructor() {
  }

  ngOnInit(): void {
  }

}
