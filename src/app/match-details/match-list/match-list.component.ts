import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Match } from '../../models/match';

@Component({
  selector: 'brh-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListComponent {
  @Input() matches: Match[];

  constructor() { }

  toMinSec(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    return `${minutes}m ${seconds}s`;
  }

}
