import { CanDeactivateFn } from '@angular/router';
import { DashboardPageComponent } from '../dashboard/dashboard-page/dashboard-page.component';

export const canDeactivateGuard: CanDeactivateFn<DashboardPageComponent> = (component, currentRoute, currentState, nextState) => {
  console.log('Rota atual')
  console.log(currentRoute)
  console.log('Estado Atual')
  console.log(currentState)
  console.log('Proximo Estado')
  console.log(nextState)
  if(confirm(`Deseja sair da pagina ${component.title}?`)) return true
  return false
};
