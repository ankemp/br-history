import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Page } from '@app/models';

@Component({
  selector: 'brh-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {
  @Input() page: Page;

  constructor() { }

}
