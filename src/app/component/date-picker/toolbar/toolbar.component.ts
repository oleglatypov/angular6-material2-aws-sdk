/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mnews-calendar-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
  @Input() displayDates;
  @Output() monthChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  OnPrev() {
    this.monthChange.emit(-1);
  }

  OnNext() {
    this.monthChange.emit(1);
  }
}
