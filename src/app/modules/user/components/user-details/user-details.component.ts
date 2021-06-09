import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  userDetail: User;

  constructor(private dataTransfer: DataTransferService) {
    console.log(this.userDetail);
  }

  ngOnInit(): void {
  }

  changeLogin() {
    this.dataTransfer.store.next(this.userDetail.username);
    console.log(this.dataTransfer.store.getValue());
  }
}
