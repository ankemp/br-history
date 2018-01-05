import { Component, Input } from '@angular/core';
import { Team } from '@app/models';

@Component({
  selector: 'brh-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent {
  @Input() team: Team;
  @Input() size = 200;

  constructor() { }

  get inPlacement(): boolean {
    if (this.team.placementGamesLeft > 0) {
      return true;
    }
    return false;
  }

}
