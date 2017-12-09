import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  { path: 'match', loadChildren: 'app/match-details/match-details.module#MatchDetailsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
