import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatCardModule, MatChipsModule } from '@angular/material';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared/shared.module';

import { TtParsePipe } from './tt-parse.pipe';
import { BattleriteCardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SharedModule
  ],
  providers: [TranslatePipe],
  declarations: [
    TtParsePipe,
    BattleriteCardComponent
  ],
  exports: [
    BattleriteCardComponent
  ]
})
export class BattleritesModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
