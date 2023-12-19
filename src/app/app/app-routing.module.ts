import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { canActivateChildGuard } from '../guards/can-activate-child.guard';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { canActivateGuard } from '../guards/can-activate.guard';
import { canMatchGuard } from '../guards/can-match.guard';

const routes: Routes = [
  {path: "", component: HomePageComponent, canMatch: [canMatchGuard]},
  {path: "home", redirectTo: ""},
  {path: "login", component: LoginPageComponent, canActivate: [canActivateGuard]},
  {path: "", loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) , canActivateChild: [canActivateChildGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
