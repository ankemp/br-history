import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailsContainerComponent } from './match-details-container/match-details-container.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: ':matchId', component: MatchDetailsContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
