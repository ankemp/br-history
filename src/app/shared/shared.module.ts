import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecToMinPipe } from './sec-to-min.pipe';
import { ReduceStatPipe } from './reduce-stat.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecToMinPipe,
    ReduceStatPipe
  ],
  exports: [
    SecToMinPipe,
    ReduceStatPipe
  ]
})
export class SharedModule { }
