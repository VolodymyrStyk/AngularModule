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
  modelErrorMessage:string;
  priceErrorMessage:string;
  yearErrorMessage:string;
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

  checkValid() {
    if (this.model.errors){
      this.modelErrorMessage = 'You input ' + this.model.errors.minlength.actualLength + ' Please input more then ' + this.model.errors.minlength.requiredLength + ' symbols';
    }
    if (this.price.errors){
      this.priceErrorMessage = 'You input ' + this.price.errors.min.actual + ' Please input more then ' + this.price.errors.min.min;
    }
    if (this.year.errors){
      this.yearErrorMessage = 'You input ' + this.year.errors.min.actual + ' Please input more then ' + this.year.errors.min.min;
    }
  }
}
