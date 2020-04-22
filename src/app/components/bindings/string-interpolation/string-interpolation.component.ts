import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  message: string = `This is some random message`;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Returns the Message
   */
  getMessage(): string {
    return this.message;
  }
}
