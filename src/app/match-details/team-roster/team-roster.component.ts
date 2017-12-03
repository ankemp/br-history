import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatchDetailsService } from '../match-details.service';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {
  @Input() dataid: string;
  roster$: Observable<any>;

  constructor(
    public details: MatchDetailsService
  ) { }

  ngOnInit() {
    this.roster$ = this.details.get('roster', this.dataid);
  }

}
