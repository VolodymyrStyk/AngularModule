import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../components/app/interfaces/user";
import {Post} from "../../../components/app/interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id);
  }
  getUserPosts(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + '/' + id + '/' +'posts');
  }
}
