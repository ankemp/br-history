import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Battlerite } from '@app/models';

@Component({
  selector: 'brh-br-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleriteCardComponent implements OnInit {
  @Input() data: Battlerite;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
