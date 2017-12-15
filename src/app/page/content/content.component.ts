import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { IConverterOptionsChangeable } from 'ngx-showdown';

import { Page } from '../../models/page';

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
