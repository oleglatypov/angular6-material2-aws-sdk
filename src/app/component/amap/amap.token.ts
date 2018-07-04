/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { InjectionToken } from '@angular/core';

import { AmapConfig } from './amap.config';

export const mnews_AMAP_USER_OPTIONS = new InjectionToken<AmapConfig>(
  'amap-user-options'
);

export const mnews_AMAP_DEFAULT_OPTIONS = new InjectionToken<AmapConfig>(
  'amap-default-options'
);

export function mnews_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY() {
  return new AmapConfig();
}
