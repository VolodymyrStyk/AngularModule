import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  arr: number[] = [1, 2, 3, 4, 5]

  constructor() {
  }

  getNum() {
    this.arr.forEach(value => value);
  }
}
