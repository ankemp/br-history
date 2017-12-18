import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { SecToMinPipe } from './sec-to-min.pipe';
import { ReduceStatPipe } from './reduce-stat.pipe';
import { AssetRoutePipe } from './asset-route.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent
  ],
  exports: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent
  ]
})
export class SharedModule { }
