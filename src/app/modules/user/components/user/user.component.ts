import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {ActivatedRoute, Router} from "@angular/router";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  userLift = new EventEmitter<User[]>();

  constructor(private dataTransfer: DataTransferService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  getUser() {
    this.userLift.emit([this.user]);
  }
}
