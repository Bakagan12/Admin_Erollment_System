import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  loginAndRedirect(username: string, password: string): Observable<any> {
    return this.login(username, password).pipe(
      tap((response) => {
        if (response && response.token) {
          // Store the JWT token and username in localStorage
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('username', username);
          localStorage.setItem('user_id', response.id);
          localStorage.setItem('user_role_id', response.user_role_id);
          const userData = {
            username: username,
            user_role_id: response.user_role_id,
            first_name: response.first_name,
            last_name: response.last_name,
            middle_name: response.middle_name,
            email: response.email,
            age: response.age,
            date_of_birth: response.date_of_birth,
            contact_number: response.contact_number,
            place_of_birth: response.place_of_birth,
            gender: response.gender,
            role_name: response.role_name,
          };

          // Store all data as a JSON array with one object
          localStorage.setItem('user_data', JSON.stringify([userData]));
          //Role Name
          localStorage.setItem('role_name', response.role_name);
          // Handle the redirect URL from the backend
          const redirectUrl = response.redirectUrl || '/auth/login';
          if (redirectUrl) {
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate(['/auth/login']);
          }
        }
      })
    );
  }
  getUserData(): any {
    const data = localStorage.getItem('user_data');
    return data ? JSON.parse(data)[0] : null;
  }
  getUserFullName(): string {
    const user = this.getUserData();
    if (!user) return '';
    return `${user.first_name} ${user.middle_name} ${user.last_name}`.trim();
  }

  getRoleName(): string {
    return localStorage.getItem('role_name') || '';
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_role_id');
    localStorage.removeItem('user_data');
    localStorage.removeItem('lastRoleIndex');
    localStorage.removeItem('activeCarouselIndex');
    localStorage.removeItem('change_pass_code');
    localStorage.removeItem('role_name');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getUserRole(): string {
    return localStorage.getItem('user_role_id') || '';
  }
  getToken(): string | null {
    const token = localStorage.getItem('auth_token');
    return token;
  }
  getUserId(): string | null {
    const user_id = localStorage.getItem('user_id');
    return user_id;
  }

}
