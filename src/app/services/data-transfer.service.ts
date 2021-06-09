import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  store: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor() {
  }
}
