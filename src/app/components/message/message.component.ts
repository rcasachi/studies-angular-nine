import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  DoCheck
{

  @Input() message: string;
  @Input() index: number;
  @Output() messageDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log(`Message Constructor: ${this.message} and ${this.index}`);
  }

  /**
   * ngOnChanges test
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Message ngOnChanges: ${this.message} and ${this.index}`);

    for(let prop in changes) {
      console.log(
        `Property Name: ${prop} and Property Value: ${changes[prop].currentValue}
         and Previous Value: ${changes[prop].previousValue}`
      );
    }
  }

  /**
   * ngOnInit Tests
   */
  ngOnInit(): void {
    console.log(`Message ngOnInit: ${this.message} and ${this.index}`);
  }

  /**
   * ngDoCheck tests
   */
  ngDoCheck(): void {
    console.log(`Message ngDoCheck: ${this.message} and ${this.index}`);
  }

  /**
   * ngAfterContentInit tests
   */
  ngAfterContentInit(): void {
    console.log(`Message ngAfterContentInit`);
  }

  /**
   * ngAfterContentChecked tests
   * Called after every check of the component's or directive's content
   */
  ngAfterContentChecked(): void {
    console.log(`Message ngAfterContentChecked`);
  }

  /**
   * ngAfterViewInit tests
   */
  ngAfterViewInit(): void {
    console.log(`Message ngAfterViewInit`);
  }

  /**
   * ngAfterViewChecked tests
   * Called after every check of the component's view. Applies to components only.
   */
  ngAfterViewChecked(): void {
    console.log(`Message ngAfterViewChecked`);
  }

  /**
   * ngOnDestroy tests
   * Called once, before the instance is destroyed.
   */
  ngOnDestroy(): void {
    console.log(`Message ngOnDestroy`);
  }

  /**
   * Delete a Message
   */
  delete(): void {
    this.messageDeleted.emit(this.index);
  }
}
