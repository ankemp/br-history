import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

import { Match, Player } from '@app/models';

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
  @Output() openMatch = new EventEmitter<Match>();
  @Output() tabChange = new EventEmitter<MatTabChangeEvent>();
  @Output() reloadMatches = new EventEmitter<string>();

  constructor() { }

  select(match: Match): void {
    this.matchSelected.emit(match);
  }

  profile(player: Player): void {
    this.viewProfile.emit(player);
  }

  open(match: Match): void {
    this.openMatch.emit(match);
  }

}
