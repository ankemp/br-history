import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchDetailsService } from '../match-details.service';

@Component({
  selector: 'brh-match-round',
  templateUrl: './match-round.component.html',
  styleUrls: ['./match-round.component.css']
})
export class MatchRoundComponent implements OnInit {
  @Input() dataid: string;
  data$: Observable<any>;

  constructor(
    public details: MatchDetailsService
  ) { }

  ngOnInit() {
    this.data$ = this.details.get('round', this.dataid);
  }

  roundLength(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    return `${minutes}m ${seconds}s`;
  }

}
