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

  get leagueName(): string {
    switch (this.team.league) {
      case 6:
        return 'Grand Champion';
      case 5:
        return 'Champion';
      case 4:
        return 'Diamond';
      case 3:
        return 'Platinum';
      case 2:
        return 'Gold';
      case 1:
        return 'Silver';
      case 0:
        return 'Bronze';
    }
  }

}
