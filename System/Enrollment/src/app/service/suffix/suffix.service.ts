import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuffixService {
  private apiUrl = environment.apiUrl + '/person/suffix';
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllSuffix(): Observable<any> {
    const token = this.auth.getToken();
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
