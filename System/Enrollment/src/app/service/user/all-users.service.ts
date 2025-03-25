import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  private apiUrl = environment.apiUrl + '/all_user/get_all_user';
  private createUserUrl = environment.apiUrl + '/all_user/user/create';
  private updateUserUrl = environment.apiUrl + '/all_user/user/update';
  private deleteUserUrl = environment.apiUrl + '/all_user/user/delete';

  constructor(private http: HttpClient, private auth: AuthService) { }

  // Get all users
  getAllUsers(): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  // Create a new user
  createUser(userData: any): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.createUserUrl, userData, { headers });
  }

  // Update an existing user
  updateUser(userId: string, userData: any): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.updateUserUrl}/${userId}`, userData, { headers });
  }

  // Delete a user
  deleteUser(userId: string): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.deleteUserUrl}/${userId}`, { headers });
    // If your backend uses DELETE, use this instead:
    // return this.http.delete<any>(`${this.deleteUserUrl}/${userId}`, { headers });
  }
}
