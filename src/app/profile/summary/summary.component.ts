import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player } from '@app/models';

@Component({
  selector: 'brh-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  @Input() player: Player;

  constructor() { }

}
