import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as matchSelectors from '@state/matches';
import * as telemetryActions from '@state/actions/telemetry';
import { Participant, Battlerite } from '@app/models';

@Component({
  selector: 'brh-battlerites',
  templateUrl: './battlerites.component.html',
  styleUrls: ['./battlerites.component.css']
})
export class BattleritesComponent implements OnInit {
  battlerites$: Observable<Battlerite[]>;

  constructor(
    private store: Store<Battlerite[]>,
    public dialogRef: MatDialogRef<BattleritesComponent>,
    @Inject(MAT_DIALOG_DATA) public participant: Participant
  ) {
    this.battlerites$ = store.select(matchSelectors.getMatchBattlerites);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.store.dispatch(new telemetryActions.LoadPlayerBattlerites(this.participant.player.id));
  }

}
