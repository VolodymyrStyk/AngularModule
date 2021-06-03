import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../components/app/interfaces/user";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }

  showAllPost() {
    this.router.navigate([this.user.id,'posts'], {relativeTo: this.activatedRoute, state: this.user})
  }
}
