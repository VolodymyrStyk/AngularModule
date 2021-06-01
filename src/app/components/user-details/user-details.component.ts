import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDet: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private userService:UserService) {
    this.activatedRoute.params.subscribe(params => {
      if (!this.router.getCurrentNavigation()?.extras.state){
        this.userService.getUser(params.id).subscribe(value => this.userDet = value);
      }
      this.userDet = this.router.getCurrentNavigation()?.extras.state as User;
    });

  }

  ngOnInit(): void {
  }

}
