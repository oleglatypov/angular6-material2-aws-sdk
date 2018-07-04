/**
 * @license
 * Copyright mnews All Rights Reserved.
 * https://github.com/oleglatypov
 */

import { Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mnews-layout-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'mnews-layout-header'
  }
})
export class LayoutHeaderComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'mnews-layout-sidenav',
  template: '<ng-content></ng-content>',
  host: {
    class: 'mnews-layout-sidenav'
  }
})
export class LayoutSidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'mnews-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ContentChild(LayoutHeaderComponent) _headerComponent: LayoutHeaderComponent;
  constructor() {}

  ngOnInit() {}
}
