import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterComponent {
  @Input() data: any;

  constructor() { }

}
