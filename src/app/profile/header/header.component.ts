import { Component, Input } from '@angular/core';

import { Player } from '../../models';

@Component({
  selector: 'brh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() player: Player;

  constructor() { }

}
