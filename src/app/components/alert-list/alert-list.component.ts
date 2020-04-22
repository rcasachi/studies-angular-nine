import { AlertComponent } from './../alert/alert.component';
import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ContentChild,
  AfterContentInit,
  ContentChildren
} from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements AfterViewInit, AfterContentInit {

  @ViewChild(AlertComponent, {static: false}) firstAlertComponent: AlertComponent;
  @ViewChildren(AlertComponent) allAlertComponent: QueryList<AlertComponent>;

  @ContentChild(AlertComponent, {static: false}) firstProjectedAlertComponent: AlertComponent;
  @ContentChild('tempAlert', {static: false}) tempAlertComponent: AlertComponent;
  @ContentChildren(AlertComponent) allProjectedAlertComponent: QueryList<AlertComponent>;

  alerts: string[] = [
    'Alert One',
    'Alert Two',
    'Alert Three',
  ];

  /**
   * AfterViewInit Events
   */
  ngAfterViewInit(): void {
    this.firstAlertComponent.alert = 'Changed alert from alert list';

    this.allAlertComponent.toArray().forEach(alert => {
      alert.alert = 'Changed all alerts from alert list';
    });
  }

  /**
   * AfterContentInit Events
   */
  ngAfterContentInit(): void {
    this.firstProjectedAlertComponent.alert = 'Changed projected alerts from alert list';

    this.allProjectedAlertComponent.toArray().forEach(alert => {
      alert.alert = 'Changed all projected alerts from alert list';
    });

    this.tempAlertComponent.alert = 'Changed template alert from alert list';
  }
}
