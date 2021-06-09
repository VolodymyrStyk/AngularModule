import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
