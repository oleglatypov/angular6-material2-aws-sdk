/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { mnews_NOTIFICATION_DATA } from './notification.config';
import { NotificationRef } from './notification.ref';
import { NotificationAnimations } from './notification.animation';

@Component({
  moduleId: module.id,
  selector: 'mnews-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [NotificationAnimations.contentFade],
  host: {
    '[@contentFade]': '',
  }
})
export class NotificationComponent {

  data: { message: string, title: string, type: string };

  constructor(
    public notificationRef: NotificationRef<NotificationComponent>,
    @Inject(mnews_NOTIFICATION_DATA) data: any
  ) {
    this.data = data;
  }

  action() {
    this.notificationRef.dismissWithAction();
  }
}
