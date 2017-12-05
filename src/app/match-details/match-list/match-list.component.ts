import { Component, Input } from '@angular/core';

@Component({
  selector: 'brh-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  @Input() matches: any;

  constructor() { }

  toMinSec(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - (minutes * 60);
    return `${minutes}m ${seconds}s`;
  }

}
