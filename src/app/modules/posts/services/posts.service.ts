import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../components/app/interfaces/post";
import {CommentModel} from "../../../components/app/interfaces/comment-model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  getPost(id: string): Observable<Post> {
    return this.httpClient.get<Post>(this.url + '/' + id);
  }
  getPostComments(id: string): Observable<CommentModel[]> {
    return this.httpClient.get<CommentModel[]>(this.url + '/' + id + '/' +'comments');
  }
}

