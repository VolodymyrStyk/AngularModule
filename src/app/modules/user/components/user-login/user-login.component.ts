import {Component, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login: string;

  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => {
      this.login = value;
    })
  }

  ngOnInit(): void {
  }

}
