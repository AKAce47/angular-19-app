import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = signal(false);

  logIn(): void {
    this.isAuthenticated.set(true);
  }

  logOut(): void {
    this.isAuthenticated.set(false);
  }

  authenticated(): boolean {
    return this.isAuthenticated();
  }
}
