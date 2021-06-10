import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginControl = new FormControl('def login', [Validators.minLength(2), this.customValidator]);

  myFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: new FormControl('def password'),
  });


  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myFormGroup);
  }

  customValidator(control: AbstractControl) {
    // console.log(control);
    if (control.value.includes('fuck')){
      return {fuckPresent: true};
    }
    return null;
  }
}
