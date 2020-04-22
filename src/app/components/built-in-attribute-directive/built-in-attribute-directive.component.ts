import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-attribute-directive',
  templateUrl: './built-in-attribute-directive.component.html',
  styleUrls: ['./built-in-attribute-directive.component.scss']
})
export class BuiltInAttributeDirectiveComponent implements OnInit {

  gradientToggle: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
