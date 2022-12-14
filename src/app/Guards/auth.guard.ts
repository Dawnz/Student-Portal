import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private subject = new BehaviorSubject<boolean>(true);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.subject.getValue()) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
  constructor(public auth: AuthenticationService, public router: Router) {
    this.auth.isLoggedIn$.subscribe((isLoggedIn) => {
      this.subject.next(isLoggedIn);
    });
  }
}
