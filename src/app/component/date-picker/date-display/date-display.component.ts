/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mnews-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateDisplayComponent {
  displayDates: any[] = [];
  @Input()
  set selectedDate(val) {
    this.displayDates = [val];
  }
  get selectedDate() {
    return this.displayDates;
  }

  constructor() {}
}
