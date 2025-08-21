import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RedirectCommand, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

/**
 * @description
 *
 * A guard class to check if a user is not logged in (not authenticated).
 * This guard might seem iditotic at first to have, but it's purpose
 * does add value.
 * Use this guard on routes such as login, forgot password, sign up, or
 * similar pages.
 * Places where it makes sense to allow an application user who does not
 * have an account to be, or perform some action.
 * i.e., if you're already logged in, why do you need to go to the login page?
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!this.authService.authenticated()) {
      return true;
    }

    return new RedirectCommand(this.router.parseUrl('/'), {
      skipLocationChange: false,
    });
  }
}
