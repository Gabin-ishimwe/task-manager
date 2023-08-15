import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoutes } from './features';

const routes: Routes = [
  ...homeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
