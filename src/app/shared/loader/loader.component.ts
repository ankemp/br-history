import { Component, Input } from '@angular/core';

@Component({
  selector: 'brh-loader',
  template: `<mat-progress-spinner [diameter]="diameter" color="accent" mode="indeterminate"></mat-progress-spinner>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() diameter = 20;

  constructor() { }

}
