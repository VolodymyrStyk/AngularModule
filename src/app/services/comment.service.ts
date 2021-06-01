import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../models/Comments";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getComment(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(this.url);
  }
}
