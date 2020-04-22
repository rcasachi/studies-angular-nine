import { CustomValidations } from './../../classes/custom.validations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  get name() {
    return this.userForm.get('name');
  }

  get username() {
    return this.userForm.get('username');
  }

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', [
        Validators.required,
        Validators.minLength(3),
      ]),
      username: new FormControl('doej',
        // CustomValidations.unique,
        null,
        CustomValidations.asyncUnique
      ),
      email: new FormControl('doej@my-site.me'),
      phone: new FormControl('5511999989999'),
      website: new FormControl('my-site.me'),
      address: new FormGroup({
        street: new FormControl('123, Home St'),
        suite: new FormControl('1'),
        city: new FormControl('My City'),
        zipcode: new FormControl('99999999'),
        geo: new FormGroup({
          lat: new FormControl('-12.23'),
          lng: new FormControl('24.23'),
        }),
      }),
      company: new FormGroup({
        name: new FormControl('My Beautiful Company'),
        catchPhrase: new FormControl('charam'),
        bs: new FormControl('A company that create beautiful things.'),
      }),
      hobbies: new FormArray([]),
    });
  }

  /**
   * Add Hobby Field
   */
  addHobby(): void {
    (this.userForm.get('hobbies') as FormArray).push(new FormControl(''));
  }

  /**
   * Delete Hobby Field
   */
  deleteHobby(i: number): void {
    (this.userForm.get('hobbies') as FormArray).removeAt(i);
  }

  /**
   * Submit UserForm
   */
  submit(): void {
    console.log(this.userForm);
  }

  /**
   * Reset User Form
   */
  resetForm(): void {
    this.userForm.reset();
  }
}
