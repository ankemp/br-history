import { Component, Input } from '@angular/core';

import { Menu } from '@app/models';

@Component({
  selector: 'brh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu: Menu[];

  constructor() { }

}
