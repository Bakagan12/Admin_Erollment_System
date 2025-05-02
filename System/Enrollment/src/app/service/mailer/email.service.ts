import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  emailSend(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/email/send`, { email });
  }

  sendEmail(email: string): Observable<any> {
    return this.emailSend(email).pipe(
      tap((response) => {
        // console.log('FULL USER:', response.user.id);
        // Store the JWT token and username in localStorage
        localStorage.setItem('gen_user_email', response.user.gen_user_email);
        localStorage.setItem('username', response.user.username);
        localStorage.setItem('change_pass_code', response.user.change_pass_code);
        localStorage.setItem('user_id', response.user.id);
      })
    );
  }
  getStoredUserData(): { username: string | null, change_pass_code: string | null, user_id: string | null } {
    return {
      username: localStorage.getItem('username'),
      change_pass_code: localStorage.getItem('change_pass_code'),
      user_id: localStorage.getItem('user_id')
    };
  }
}
