import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Match, Player } from '@app/models';

@Component({
  selector: 'brh-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchDetailsComponent implements OnInit {
  @Input() match: Match;
  @Input() player?: Player = { id: '', name: '' };
  @Output() viewProfile = new EventEmitter<Player>();
  @Output() openMatch = new EventEmitter<Match>();
  showOpenMatch = false;

  constructor() { }

  ngOnInit() {
    this.showOpenMatch = this.openMatch.observers.length > 0;
  }

  profile(player: Player): void {
    this.viewProfile.emit(player);
  }

  open(): void {
    this.openMatch.emit(this.match);
  }

}
