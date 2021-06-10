import {Component, OnInit} from '@angular/core';
import {Car} from "../../interfaces/car";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  myFormGroup = new FormGroup({
    model: new FormControl('audi'),
    price: new FormControl(100),
    year: new FormControl(2000),
  });

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value);
  }

  save() {
    this.carService.postCar(this.myFormGroup.getRawValue()).subscribe(
      value => {
        console.log(value);
        this.carService.getCars().subscribe(value => this.cars = value)
      }
    );
  }

}
