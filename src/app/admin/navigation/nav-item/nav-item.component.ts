import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mnews-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent {

  @Input() item: any;
  // @HostBinding('style.color') color = '#f0f';
}
