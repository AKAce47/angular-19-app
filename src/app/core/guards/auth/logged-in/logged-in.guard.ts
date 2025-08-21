import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RedirectCommand, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

/**
 * @description
 * 
 * A guard class to check if a user is authenticated.
 * Use on routes that require the user to be authenticated
 * and have their identity known.
 * If the user is redirected to the login path, the page they were
 * trying to access will be saved as a query parameter
 * so they can be sent to the page on successful authentication.
 * If the user is not authenticated, they are redirected to the
 * login page.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.authenticated()) {
      return true;
    }

    const path = route.routeConfig?.path ?? '';
    const url = '/account/login' + (path !== '' ? `?r=${path}` : '');
    return new RedirectCommand(this.router.parseUrl(url), {
      skipLocationChange: false,
    });
  }  
}
