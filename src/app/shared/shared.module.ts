import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecToMinPipe } from './sec-to-min.pipe';
import { ReduceStatPipe } from './reduce-stat.pipe';
import { AssetRoutePipe } from './asset-route.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe
  ],
  exports: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe
  ]
})
export class SharedModule { }
