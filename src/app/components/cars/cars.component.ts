import {Component, OnInit} from '@angular/core';
import {Car} from "../../models/Car";
import {carsDataInfo} from "../../data/carsData";



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor() {
  }

  ngOnInit(): void {
    this.cars = carsDataInfo;
  }

}
