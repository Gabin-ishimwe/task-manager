import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent, dashboardRoutes, homeRoutes, signRoutes, signUpRoutes } from './features';

const routes: Routes = [
  ...homeRoutes,
  ...signRoutes,
  ...signUpRoutes,
  ...dashboardRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
