import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  message: string = `This is some random message`;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Return a Message
   */
  getMessage(): string {
    return this.message;
  }

}
