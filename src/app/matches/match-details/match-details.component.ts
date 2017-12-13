import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Match } from '../../models/match';
import { Player } from '../../models/player';

@Component({
  selector: 'brh-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchDetailsComponent {
  @Input() match: Match;
  @Input() player?: Player = { id: '', name: '' };
  @Output() viewProfile = new EventEmitter<Player>();
  @Output() openMatch = new EventEmitter<Match>();

  constructor() { }

  profile(player: Player): void {
    this.viewProfile.emit(player);
  }

  open(): void {
    this.openMatch.emit(this.match);
  }

}
