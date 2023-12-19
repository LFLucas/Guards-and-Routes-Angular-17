import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  console.log('Rota')
  console.log(route)

  console.log("Segmentos")
  console.log(segments)
  
  return true;
};
