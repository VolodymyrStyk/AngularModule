import {Injectable} from '@angular/core';
import {UserComments} from "../models/UserComments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserCommentService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getCommets(): Observable<UserComments[]> {
    return this.httpClient.get<UserComments[]>(this.url);
  }
}
