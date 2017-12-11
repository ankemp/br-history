import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecToMinPipe } from './sec-to-min.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecToMinPipe
  ],
  exports: [
    SecToMinPipe
  ]
})
export class SharedModule { }
