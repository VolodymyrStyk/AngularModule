import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url: string = 'http://192.168.88.253/api/v1/cars';

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }
  postCar(car:Car): Observable<Car>{
    return this.httpClient.post<Car>(this.url, car);
  }
}
