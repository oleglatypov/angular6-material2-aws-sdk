/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { InjectionToken } from '@angular/core';

export const mnews_AMAP_DATA = new InjectionToken<any>('mnewsAmapData');

export class AmapConfig {
  apiKey?: string;
  apiVersion?: string = '1.4.5';
  urlPath?: string = '//webapi.amap.com/maps';
}
