import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchDetailsService } from '../match-details.service';

@Component({
  selector: 'brh-match-round',
  templateUrl: './match-round.component.html',
  styleUrls: ['./match-round.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchRoundComponent {
  @Input() data: any;

  constructor() { }

  roundLength(): string {
    const minutes = Math.floor(this.data.attributes.duration / 60);
    const seconds = this.data.attributes.duration - (minutes * 60);
    return `${minutes}m ${seconds}s`;
  }

}
