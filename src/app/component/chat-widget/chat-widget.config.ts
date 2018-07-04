/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { InjectionToken, ViewContainerRef } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

export const mnews_CHATWIDGET_DATA = new InjectionToken<any>(
  'mnewsChatWidgetData'
);

export type ChatWidgetHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type ChatWidgetVerticalPosition = 'top' | 'bottom';

export class ChatWidgetConfig<D = any> {
  panelClass?: string | string[];
  viewContainerRef?: ViewContainerRef;
  direction?: Direction;
  data?: D | null = null;

  horizontalPosition?: ChatWidgetHorizontalPosition = 'right';
  verticalPosition?: ChatWidgetVerticalPosition = 'top';
}
