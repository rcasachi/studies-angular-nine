import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements CanComponentDeactivate {

  messages: Array<{ message: string }> = [];
  message: string = '';

  /**
   * Add new message action
   */
  addMessage(): void {
    this.messages.push({ message: this.message });
    this.message = '';
  }

  /**
   * Message Delete action
   * @param $event number
   */
  onMessageDelete($event): void {
    this.messages.splice($event, 1);
  }

  /**
   * Change the first message action
   */
  changeFirstMessage(): void {
    this.messages[0].message = 'New and Changed Message...';
  }

  /**
   * Interface Guard Method
   *
   * @returns {boolean}
   */
  confirm(): boolean {
    return confirm('Are you sure you want to navigate away?');
  }
}
