import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  // @Output() counterChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Handle Action: Event Emit Studies
   * @param operation
   */
  handleButton(operation: string): void {
    operation === 'INC' ? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
    // this.counterChange.emit(operation);
  }

}
