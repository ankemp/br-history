import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'brh-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent {
  @Input() error = 'Unknown Error';

  constructor() { }

}
