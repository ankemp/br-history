import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

import { Match, Player, Team } from '@app/models';

@Component({
  selector: 'brh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() isMatchesLoading: boolean;
  @Input() player: Player;
  @Input() teams: Team[];
  @Input() isTeamsLoading: boolean;
  @Input() teamsError: string;
  @Output() matchSelected = new EventEmitter<Match>();
  @Output() viewProfile = new EventEmitter<Partial<Player>>();
  @Output() openMatch = new EventEmitter<Match>();
  @Output() tabChange = new EventEmitter<MatTabChangeEvent>();
  @Output() reloadMatches = new EventEmitter<string>();
  currentTab = 0;

  constructor() { }

  get isTeamsActive(): boolean {
    return (this.currentTab === 1 || !this.isTeamsLoading && !!!this.teamsError);
  }

}
