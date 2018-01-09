import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: 'brh-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMembersComponent {
  @Input() players: Partial<Player>[];
  @Output() viewProfile = new EventEmitter<Partial<Player>>();

  constructor() { }

}
