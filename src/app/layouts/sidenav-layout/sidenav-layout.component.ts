/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'stbui-sidenav-layout-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sidenav-layout-header'
  }
})
export class SidenavLayoutHeaderComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  // @HostBinding('class') set = 'sidenav-layout-header';
  constructor() {
    console.log('SidenavLayoutHeaderComponent');
  }

  ngOnInit() {}
}

@Component({
  selector: 'stbui-sidenav-layout-toolbar',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sidenav-layout-toolbar'
  }
})
export class SidenavLayoutToolbarComponent implements OnInit {
  constructor() {
    console.log('SidenavLayoutToolbarComponent');
  }

  ngOnInit() {}
}

@Component({
  selector: 'stbui-sidenav-layout-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sidenav-layout-content'
  }
})
export class SidenavLayoutContentComponent implements OnInit {
  constructor() {
    console.log('SidenavLayoutContentComponent');

  }

  ngOnInit() {}
}

@Component({
  selector: 'stbui-sidenav-layout-side',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'stbui-sidenav-layout-side'
  }
})
export class SidenavLayoutSideComponent implements OnInit {
  constructor() {
    console.log('SidenavLayoutSideComponent');
  }

  ngOnInit() {}
}

@Component({
  selector: 'stbui-sidenav-layout, stbui-sidenav-layout-container',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'layout-container',
    '[class.layout-strategy]': 'scrollStrategy === "strategy"'
  }
})
export class SidenavLayoutComponent implements OnInit {
  @Input() position: 'start' | 'end' = 'start';
  @Input() scrollStrategy;
  @ContentChild(SidenavLayoutHeaderComponent)
  _header: SidenavLayoutHeaderComponent;

  constructor() {
    console.log('SidenavLayoutComponent');
  }

  ngOnInit() {}
}
