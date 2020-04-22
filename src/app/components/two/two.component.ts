import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  prop: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.prop = this.userService.getProp();
    this.userService.propChange.subscribe(prop => this.prop = prop);
  }

}
