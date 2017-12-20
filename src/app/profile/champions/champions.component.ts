import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Player } from '../../models';

@Component({
  selector: 'brh-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent implements OnInit {
  @Input() player: Player;
  // championSearch: string;

  constructor() { }

  ngOnInit() {
  }

}
