import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Match } from '../../models/match';

@Component({
  selector: 'brh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() user: string;  // Eventually will be an object
  @Output() matchSelected = new EventEmitter<Match>();

  constructor() { }

  select(match: Match): void {
    this.matchSelected.emit(match);
  }
}
