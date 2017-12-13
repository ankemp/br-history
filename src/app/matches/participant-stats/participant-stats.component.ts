import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Participant } from '../../models/participant';

@Component({
  selector: 'brh-participant-stats',
  templateUrl: './participant-stats.component.html',
  styleUrls: ['./participant-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantStatsComponent {
  @Input() participant: Participant;

  constructor() { }

}
