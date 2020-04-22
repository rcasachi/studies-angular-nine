import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  user: { name: string } = { name: 'Rafael' };

  /**
   * Change Property Method
   */
  changeProperty(): void {
    this.user.name = 'Casachi';
  }

  /**
   * Change Object Method
   */
  changeObject(): void {
    this.user = { name: 'Rafael Casachi' };
  }
}
