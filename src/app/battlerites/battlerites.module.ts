import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatCardModule } from '@angular/material';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BattleriteCardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslatePipe],
  declarations: [
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
