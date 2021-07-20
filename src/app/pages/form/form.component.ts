import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario();
    this.loadApi()
  }

  formulario():void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      term: ['', [Validators.required, Validators.requiredTrue]],
      youtube: ['', [
        Validators.required,
        Validators.pattern('(?:.+?)?(?:\\/v\\/|watch\\/|\\?v=|\\&v=|youtu\\.be\\/|\\/v=|^youtu\\.be\\/|watch\\%3Fv\\%3D)([a-zA-Z0-9_-]{11})+')
      ]],
      type: [''],
      color: ['']
    })
  }

  // for updates inputs
  loadApi(): any {
    const response = {
      email: 'hola@gmai.com',
      password: '123456788',
      term: true
    }
    // forma 1
    /*!this.form.patchValue({
      email: response.email,
      password: response.email,
      term: response.term
    })*/

    //forma 2
    this.form.patchValue(response)
  }

  // crate function for select type car
  changeType = () => {
    // console.log(this.form.value.type)
    if (this.form.value.type === 'carro') {
      this.form.get('color').setValidators([Validators.required]);
      this.form.get('color').updateValueAndValidity();
    } else {
      this.form.get('color').clearValidators();
      this.form.get('color').updateValueAndValidity();
    }
  }


  send(): void {
    console.log(this.form.value);
  }
}
