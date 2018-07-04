/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { NotificationComponent } from './notification.component';
import { NotificationContainer } from './notification-container';
import { mnews_NOTIFICATION_DEFAULT_OPTIONS, NotificationService } from './notification.service';
import { NotificationConfig } from './notification.config';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export function mnews_NOTIFICATION_DEFAULT_OPTIONS_PROVIDER_FACTORY() {
  return new NotificationConfig();
}

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [NotificationContainer],
  declarations: [NotificationContainer, NotificationComponent],
  entryComponents: [NotificationContainer, NotificationComponent],
  providers: [NotificationService, {
    provide: mnews_NOTIFICATION_DEFAULT_OPTIONS,
    useFactory: mnews_NOTIFICATION_DEFAULT_OPTIONS_PROVIDER_FACTORY
  }]
})
export class NotificaitonModule {
}
