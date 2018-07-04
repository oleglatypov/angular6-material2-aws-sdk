/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { InjectionToken, ViewContainerRef } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

export const mnews_NOTIFICATION_DATA = new InjectionToken<any>('mnewsNonticationData');

export type HorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type VerticalPosition = 'top' | 'bottom';

export class NotificationConfig<D = any> {
  viewContainerRef?: ViewContainerRef;
  duration?: number = 2000;
  direction?: Direction;
  data?: D | null = null;

  horizontalPosition?: HorizontalPosition = 'right';
  verticalPosition?: VerticalPosition = 'top';
}
