import {Component, OnInit} from '@angular/core';
import {Car} from "../../interfaces/car";
import {CarService} from "../../services/car.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  model = new FormControl('audi', [Validators.minLength(2)]);
  price = new FormControl(100, [Validators.min(0)]);
  year = new FormControl(2000, [Validators.min(1990),Validators.max(2021)]);
  myFormGroup = new FormGroup({
    model: this.model,
    price: this.price,
    year: this.year,
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
