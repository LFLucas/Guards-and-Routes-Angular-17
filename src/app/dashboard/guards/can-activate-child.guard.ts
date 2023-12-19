import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { lastValueFrom } from 'rxjs';

export const canActivateChildGuard: CanActivateChildFn = async (childRoute, state) => {
  let httpClient: HttpClient = inject(HttpClient)
  let response: any = await lastValueFrom(httpClient.get<any>("http://localhost:3000/user"))
 
  if(childRoute.queryParams["email"] === response["email"] && 
     childRoute.queryParams["password"] === response["password"]){
      return true
  }
 
  return false;
};
