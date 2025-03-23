import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  first_name(arg0: string, first_name: any) {
    throw new Error('Method not implemented.');
  }
  middle_name(arg0: string, middle_name: any ) {
    throw new Error('Method not implemented.');
  }
  last_name(arg0: string, last_name: any ) {
    throw new Error('Method not implemented.');
  }
  email(arg0: string, email: any ) {
    throw new Error('Method not implemented.');
  }
  username(arg0: string, username: any ) {
    throw new Error('Method not implemented.');
  }
  password(arg0: string, password: any ) {
    throw new Error('Method not implemented.');
  }
  role_name(arg0: string, role_name: any ) {
    throw new Error('Method not implemented.');
  }


  private apiUrl = environment.apiUrl + '/all_user/get_all_user';
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllUsers(): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}`, { headers });
  }
}
