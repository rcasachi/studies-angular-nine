import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  users: Array<IUser>;

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get all users
    // this.users = this.userService.getUsers(); // Service via array
    // this.activateRoute.data.forEach(data => this.users = data.users); // Via Route Resolve Guard
    this.userService.getUsersViaREST().subscribe(
      users => this.users = users
    );
  }
}
