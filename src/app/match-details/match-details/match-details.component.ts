import { Component, Input } from '@angular/core';

import { Match } from '../../models/match';

@Component({
  selector: 'brh-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent {
  @Input() match: Match;

  constructor() { }
}
