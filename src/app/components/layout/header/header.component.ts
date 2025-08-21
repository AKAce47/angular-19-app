import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'layout-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  protected isLoggedIn = computed(() => this.authService.authenticated());

  protected profile(): void {
    this.router.navigate(['/account/profile']);
  }

  protected login(): void {
    this.router.navigate(['/account/login']);
  }

  protected logout(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
