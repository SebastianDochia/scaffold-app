import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Observable<boolean | UrlTree>(observer => {
      this.authService.loggedInUser$.subscribe(loggedInUser => {
        console.log(loggedInUser);
        if (loggedInUser) {
          observer.next(true);
        } else {
          // Redirect the user to the authentication page
          observer.next(this.router.createUrlTree(['/auth'])); // User is not authenticated, redirect to login page
        }

        observer.complete();
      })
    });
  }
}
