import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() { }

  ngOnInit(): void {
    // Starting Gender and Communication Modes
    this.genders = ['Male', 'Female', 'Other'];
    this.communicationModes = ['Phone', 'Email'];
  }

  /**
   * Submit Action for userForm
   * @param {NgForm} userForm
   */
  submit(userForm: NgForm): void {
    console.log('Form Submitted!', userForm);
  }
}
