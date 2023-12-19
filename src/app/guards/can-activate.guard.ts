import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {lastValueFrom} from 'rxjs'

export const canActivateGuard: CanActivateFn = async (route, state) => {
  if(confirm("Deseja fazer Log In?")) return true
  return false
};
