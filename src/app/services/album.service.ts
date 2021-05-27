import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../models/Album";


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient: HttpClient) {

  }

  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.url);
  }
}
