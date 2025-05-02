import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('auth_token');
    const userRoleId = localStorage.getItem('user_role_id');

    if (token && userRoleId) {
      // If user is already logged in, redirect them to their dashboard
      this.router.navigate([`/${this.getRedirectPath(Number(userRoleId))}/dashboard`]);
      return false;
    }

    return true; // Allow access to route if not logged in
  }

  private getRedirectPath(roleId: number): string {
    switch (roleId) {
      case 1: return 'admin';
      case 2: return 'admin';
      case 3: return 'principal';
      case 4: return 'principal';
      case 5: return 'registrar';
      case 6: return 'registrar';
      case 7: return 'cashier';
      case 8: return 'cashier';
      case 9: return 'guidance';
      case 10: return 'guidance';
      case 11: return 'clinic';
      case 12: return 'student';
      case 13: return 'guardian';
      case 14: return 'teacher';
      default: return 'auth/login';
    }
  }
}
