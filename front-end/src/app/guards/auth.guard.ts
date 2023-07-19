import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(  private _Router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const accessToken = localStorage.getItem('access_token');
      const email = localStorage.getItem('email');

      if (accessToken=='' && email || email ) {
        localStorage.removeItem('email');
        this._Router.navigate(['/home'])
        return false;
      }

      return true;
  }
}
