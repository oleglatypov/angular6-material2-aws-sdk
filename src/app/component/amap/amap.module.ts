/**
 * @license
 * Copyright mnews All Rights Reserved.
 */

import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmapComponent } from './amap.component';
import { AmapService } from './amap.service';
import { mnews_AMAP_DEFAULT_OPTIONS, mnews_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY, mnews_AMAP_USER_OPTIONS } from './amap.token';

@NgModule({
  imports: [CommonModule],
  exports: [AmapComponent],
  declarations: [AmapComponent],
  entryComponents: [AmapComponent],
  providers: [
    AmapService,
    {
      provide: mnews_AMAP_DEFAULT_OPTIONS,
      useFactory: mnews_AMAP_DEFAULT_OPTIONS_PROVIDER_FACTORY
    }
  ]
})
export class AmapModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AmapModule
  ) {
    if (parentModule) {
      throw new Error(
        "AmapModule is already loaded. It should only be imported in your application's main module."
      );
    }
  }

  static forRoot(config?): ModuleWithProviders {
    return {
      ngModule: AmapModule,
      providers: [
        {
          provide: mnews_AMAP_USER_OPTIONS,
          useValue: config
        }
      ]
    };
  }
}
