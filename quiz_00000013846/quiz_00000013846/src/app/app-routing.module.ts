import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ukm', pathMatch: 'full' },
  { path: 'ukm', loadChildren: './ukm/ukm.module#UkmPageModule' },
  { path: 'ukm-join', loadChildren: './ukm/ukm.module#UkmPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'ukm-join/:ukmId', loadChildren: './ukm/ukm-join/ukm-join.module#UkmJoinPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
