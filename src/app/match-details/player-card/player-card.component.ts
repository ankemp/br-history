import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchDetailsService } from '../match-details.service';

@Component({
  selector: 'brh-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  @Input() dataid: string;
  data$: Observable<any>;

  constructor(
    public details: MatchDetailsService
  ) { }

  ngOnInit() {
    this.data$ = this.details.get('player', this.dataid);
  }

}
