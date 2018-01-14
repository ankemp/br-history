import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { NgxGaugeModule } from 'ngx-gauge';

import { SecToMinPipe } from './sec-to-min.pipe';
import { ReduceStatPipe } from './reduce-stat.pipe';
import { AssetRoutePipe } from './asset-route.pipe';
import { LoaderComponent } from './loader/loader.component';
import { WinloseComponent } from './winlose/winlose.component';
import { RankComponent } from './rank/rank.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    NgxGaugeModule
  ],
  declarations: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent,
    WinloseComponent,
    RankComponent,
    ErrorComponent
  ],
  exports: [
    SecToMinPipe,
    ReduceStatPipe,
    AssetRoutePipe,
    LoaderComponent,
    WinloseComponent,
    RankComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
