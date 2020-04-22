import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-pipes-host',
  templateUrl: './pipes-host.component.html',
  styleUrls: ['./pipes-host.component.scss']
})
export class PipesHostComponent implements OnInit {

  dateToday: Date;

  user$: IUser;
  userEmail: string;
  userPhone: string;

  users: IUser[];
  filterIdType: string = '';

  constructor(private service: UserService) { }

  ngOnInit(): void {
    // For Built in Pipes Test
    this.dateToday = new Date();

    // For Custom Pipes Test
    this.user$ = this.service.getUserById(1);
    this.userEmail = this.user$.email;
    this.userPhone = this.user$.phone;

    // For Pure and Impure pipes test
    this.users = this.service.getUsers();
  }

  /**
   * Add a test user at users array
   */
  addUser(): void {
    this.service.addUser({
      id: this.users.length + 1,
      get name() { return `Clementine Bauch ${this.id}`},
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications"
      }
    });
  }
}
