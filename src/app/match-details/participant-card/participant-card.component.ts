import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brh-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantCardComponent {
  @Input() data: any;

  constructor() { }

}
