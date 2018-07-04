/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { AfterContentInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mnews-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'mnewsPopover'
})
export class PopoverComponent implements AfterContentInit {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild('focusTrapElement') private _focusTrapElement: ElementRef;

  constructor(private _elementRef: ElementRef) {}

  ngAfterContentInit() {}

  open() {}

  close() {}

  toggle() {
    console.log('toggle');
  }
}
