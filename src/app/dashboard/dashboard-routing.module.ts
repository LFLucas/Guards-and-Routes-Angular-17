import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { canActivateChildGuard } from '../guards/can-activate-child.guard';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';

const routes: Routes = [
  {path: "dashboard", component: DashboardPageComponent, canDeactivate: [canDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
