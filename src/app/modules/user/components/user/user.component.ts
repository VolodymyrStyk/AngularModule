import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../interfaces/user";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;

  constructor(private dataTransfer: DataTransferService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }

  getUser() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }
}
