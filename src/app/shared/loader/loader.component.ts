import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brh-loader',
  template: `<mat-progress-spinner color="accent" mode="indeterminate"></mat-progress-spinner>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  constructor() { }

}
