import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  animal = '🐕';

  constructor() { }

  ngOnInit() {
  }

  /**
   * OnClick Event Action
   */
  onClick(): void {
    alert('Button was clicked!');
  }

  /**
   * KeyUp Event Action
   * @param keyUpEvent
   */
  onKeyUp(keyUpEvent): void {
    keyUpEvent.code === 'Enter' && alert('Enter was pressed');
  }
}
