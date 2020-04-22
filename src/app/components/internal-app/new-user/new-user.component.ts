import { ActivatedRoute } from '@angular/router';
import { IUser } from './../../../interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  keySelected: any;
  createForm: boolean;

  communicationModes: string[];
  genders: string[];

  constructor(
    private service: UserService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Checkin if its update or create form
    this.router.params.subscribe(param => {
      if (!param.key) {
        this.createForm = true;
      } else {
        this.createForm = false;
        this.keySelected = param.key;
      }
    });

    // Starting Gender and Communication Modes
    this.genders = ['Male', 'Female', 'Other'];
    this.communicationModes = ['Phone', 'Email'];
  }

  /**
   * Add new user
   * @param {NgForm} userForm
   */
  submit(userForm: NgForm): void {
    this.service.addUserViaFirebase(userForm.value);
  }

  /**
   * Update an user
   * @param {NgForm} userForm
   */
  updateNameUser(userForm: NgForm): void {
    this.service.updateUserViaFirebase(this.keySelected, { name: userForm.value.name });
  }
}
