import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { canActivateChildGuard } from '../dashboard/guards/can-activate-child.guard';

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "", loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) , canActivateChild: [canActivateChildGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
