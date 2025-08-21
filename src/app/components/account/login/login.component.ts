import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { TitleService } from '../../../core/services/title/title.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private readonly titleService = inject(TitleService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected showPassword: boolean = false;

  constructor() {
    this.titleService.setTitleWithSuffix('Login');
  }
  
  login(): void {
    this.authService.logIn();

    this.router.navigate([this.getRedirectUrl()]);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * @description
   * Checks if a redirect params is in the current URL,
   * and validates if it is safe to redirect to.
   * If no param is present, or if it is not safe,
   * the default redirect if "/" is returned.
   * @returns the url path to redirect to.
   */
  private getRedirectUrl(): string {
    const r = this.route.snapshot.queryParamMap.get('r');
    if(r && this.isSafeUrl(r)) {
      return r;
    }
    return '/';
  }

  /**
   * @description
   * Check if a URL is safe.
   * Safe: is internal (does not point to an external domain - 
   * external URLs typically contain protocols like 'http' or 'https'.).
   * @param url The URL to check.
   * @returns true if the URL is internal, false if external.
   */
  private isSafeUrl(url: string): boolean {
    //TODO
    // add additional checks here to validation that the redirect URL
    // is not malicious.
    try {
      const parsedUrl = new URL(url, window.location.origin);
      return parsedUrl.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }
}
