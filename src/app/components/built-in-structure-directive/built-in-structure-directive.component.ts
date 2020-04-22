import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-structure-directive',
  templateUrl: './built-in-structure-directive.component.html',
  styleUrls: ['./built-in-structure-directive.component.scss']
})
export class BuiltInStructureDirectiveComponent implements OnInit {

  messages: string[];
  showList: boolean;
  alertType: string;

  ngOnInit() {
    this.messages = [
      'Message One',
      'Message Two',
      'Message Three',
      'Message Four',
      'Message Five',
    ];

    this.showList = true;
  }
}
