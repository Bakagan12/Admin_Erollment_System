import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.staging';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {
  private apiUrl = environment.apiUrl + '/password/update_password';
  constructor(private http: HttpClient) { }
  updatePassword(userId: string, newPassword: string): Observable<any> {
    const body = { newPassword };
    return this.http.put<any>(`${this.apiUrl}/${userId}`, body);
  }
  loginUserUpdatePassword(userId: string, newPassword: string, token: string): Observable<any> {
    const body = { newPassword };
    // Set the token in the headers
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.put<any>(`${this.apiUrl}/${userId}`, body, { headers });
  }
}
