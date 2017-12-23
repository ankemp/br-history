import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';

import { SecToMinPipe } from './sec-to-min.pipe';
import { ReduceStatPipe } from './reduce-stat.pipe';
import { AssetRoutePipe } from './asset-route.pipe';
import { LoaderComponent } from './loader/loader.component';
import { WinloseComponent } from './winlose/winlose.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent,
    WinloseComponent
  ],
  exports: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent,
    WinloseComponent
  ]
})
export class SharedModule { }
