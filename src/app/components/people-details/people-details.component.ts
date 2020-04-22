import { UserService } from './../../services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  user: IUser;

  users: Array<IUser>;

  posts: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // Get all users
    // this.users = this.userService.getUsers();

    // Get the route param for id and search user details
    this.activatedRoute.params.subscribe(params => {
      // this.user = this.users.filter(user => user.id === +params.id)[0]; // Filter method direct in the class
      // this.user = this.userService.getUserById(+params.id); // Via Service
     this.userService.getUsersByIdViaREST(+params.id).subscribe(
        user => this.user = user,
        err => console.error(err),
        () => console.warn('Fetch of User Details Completed!')
      );
    });

    // Get all query parameters
    this.activatedRoute.queryParams.subscribe(queryParams => console.log(queryParams));
  }

  /**
   * Create new User Action
   */
  createUser() {
    this.user.id = null;
    this.userService.create(this.user).subscribe(
      user => console.log(`New User have been created. Its ID is ${user.id}`),
      err => console.error(`Got an error: ${err}`),
      () => console.warn('Creation of user completed')
    );
  }

  /**
   * Update User
   */
  updateUser() {
    this.user.name = 'John Doe Silva';
    this.user.email = 'john@doe.com';
    this.userService.update(this.user).subscribe(
      user => console.log(`The User have been updated. Its ID is ${user.id}`),
      err => console.error(`Got an error: ${err}`),
      () => console.warn('Update of user completed')
    );
  }

  /**
   * Delete an User
   */
  deleteUser() {
    this.userService.delete(this.user.id).subscribe(
      user => console.log('The User have been deleted'),
      err => console.error(`Got an error: ${err}`),
      () => console.warn('Exclusion of user completed')
    );
  }

  /**
   * Get all user's posts
   */
  getUserPosts() {
    this.posts = this.userService.getPosts(this.user.id);
  }
}
