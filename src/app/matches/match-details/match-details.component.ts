import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Match } from '../../models/match';

@Component({
  selector: 'brh-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchDetailsComponent {
  @Input() match: Match;

  constructor() { }
}
