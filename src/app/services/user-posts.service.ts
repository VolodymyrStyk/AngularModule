import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUserPosts(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + '/' + id + '/posts');
  }
}
