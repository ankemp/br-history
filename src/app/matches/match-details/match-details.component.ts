import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';

import * as matchesActions from '@state/actions/matches';
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
  singleMatch = false;

  constructor(private store: Store<Match>) { }

  ngOnInit() {
    this.singleMatch = !(this.openMatch.observers.length > 0);
    if (this.singleMatch) {
      this.store.dispatch(new matchesActions.LoadTelemetry(this.match.id));
    }
  }

}
