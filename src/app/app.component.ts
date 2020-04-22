import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'studies-angular-nine';
  counter = 0;
  classToSet = 'positive';

  /**
   * Counter Action Event
   * @param buttonType
   */
  onCounterChange(buttonType: string) {
    buttonType === 'INC' ? this.counter++ : this.counter--;
    this.classToSet = this.counter >= 0 ? 'positive' : 'negative';
  }
}
