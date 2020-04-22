import { UserService } from 'src/app/services/user/user.service';
import { IUser } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-app',
  templateUrl: './internal-app.component.html',
  styleUrls: ['./internal-app.component.scss']
})
export class InternalAppComponent implements OnInit {

  users: IUser[];

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsersViaFirebase().snapshotChanges().forEach(usersSnapshot => {
      this.users = [];
      usersSnapshot.forEach(userSnapshot => {
        let user = userSnapshot.payload.toJSON();
        user['$key'] = userSnapshot.key;
        this.users.push(user as IUser);
      });
    });
  }

  /**
   * Delete an User
   */
  deleteUser($key) {
    this.service.deleteUserViaFirebase($key);
  }
}
