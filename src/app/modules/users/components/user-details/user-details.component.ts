import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: User;

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.userDetails = this.router.getCurrentNavigation()?.extras.state as User;
      }else {
        this.userService.getUser(params.id).subscribe(value => this.userDetails = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
