import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {
  }

  getTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }
}
