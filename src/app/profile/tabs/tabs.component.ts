import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Match } from '../../models/match';
import { Player } from '../../models/player';

@Component({
  selector: 'brh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() player: Player;
  @Output() matchSelected = new EventEmitter<Match>();
  @Output() viewProfile = new EventEmitter<Player>();

  constructor() { }

  select(match: Match): void {
    this.matchSelected.emit(match);
  }

  profile(player: Player): void {
    this.viewProfile.emit(player);
  }

}
