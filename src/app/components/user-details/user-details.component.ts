import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUser(value.id).subscribe(userInfo => this.userDetails = userInfo);
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userDetails = this.router.getCurrentNavigation()?.extras.state as User;
      } else {
        this.userService.getUser(value.id).subscribe(userInfo => this.userDetails = userInfo);
      }
    });

  }

  ngOnInit(): void {
  }

}
