import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  declarations: [ContainerComponent]
})
export class HistoryModule { }
