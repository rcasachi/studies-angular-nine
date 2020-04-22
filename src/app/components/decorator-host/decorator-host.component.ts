import { Laptop } from './../../classes/laptop';
import { Component, OnInit } from '@angular/core';
import { HookLogger } from 'src/app/decorators/class.decorator';
import { Readonly } from 'src/app/decorators/property.decorator';

@Component({
  selector: 'app-decorator-host',
  templateUrl: './decorator-host.component.html',
  styleUrls: ['./decorator-host.component.scss']
})
@HookLogger({
  hooks: ['ngOnInit']
})
export class DecoratorHostComponent implements OnInit {

  @Readonly('This is a read only string and it will not change.') readonly: string;

  laptop: Laptop;

  constructor() { }

  ngOnInit() {
    this.laptop = new Laptop();
  }
}
