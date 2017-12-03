import { Component, OnInit } from '@angular/core';

import { MatchService } from '../../services/match.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'brh-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public history$: Observable<any>;

  constructor(
    private match: MatchService,
  ) { }

  ngOnInit() {
    this.history$ = this.match.recent();
  }

}
