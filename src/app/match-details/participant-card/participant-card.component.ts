import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchDetailsService } from '../match-details.service';

@Component({
  selector: 'brh-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.css']
})
export class ParticipantCardComponent implements OnInit {
  @Input() dataid: string;
  data$: Observable<any>;

  constructor(
    public details: MatchDetailsService
  ) { }

  ngOnInit() {
    this.data$ = this.details.get('participant', this.dataid);
  }

}
