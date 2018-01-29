import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Battlerite } from '@app/models';

@Component({
  selector: 'brh-br-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleriteCardComponent {
  @Input() data: Battlerite;

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  get abilityKey(): string {
    switch (this.data.battlerite.abilitySlot) {
      case '0':
        return 'LMB';
      case '1':
        return 'RMB';
      case '2':
        return 'Space';
      case '3':
        return 'Q';
      case '4':
        return 'E';
      case '5':
        return 'R';
      case '5':
        return 'F';
    }
    return '';
  }

}
