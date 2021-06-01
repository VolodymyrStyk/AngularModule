import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDet: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.userDet = this.router.getCurrentNavigation()?.extras.state as User;
    });
  }

  ngOnInit(): void {
  }

}
