import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = environment.apiUrl + '/admin/allRoles';

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
