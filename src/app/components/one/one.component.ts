import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit, OnDestroy {

  prop: string;
  subscription$: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.prop = this.userService.getProp();
    // this.userService.propChange.subscribe(prop => this.prop = prop);

    this.subscription$ = this.userService.propChange.subscribe(
      prop => this.prop = prop
    );
  }


  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  /**
   * Change Prop to BAR
   */
  changeProp() {
    this.userService.setProp('bar');
  }
}
