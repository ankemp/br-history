import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileResolver } from './profile.resolver';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: ':userId', component: ContainerComponent, resolve: { profile: ProfileResolver } },
      { path: ':userId/:tab', component: ContainerComponent, resolve: { profile: ProfileResolver } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
