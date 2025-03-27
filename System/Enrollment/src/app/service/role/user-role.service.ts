import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = environment.apiUrl + '/user/allRoles';
  private createRoleUrl = environment.apiUrl + '/user/role/create';
  private updateRoleUrl = environment.apiUrl + '/user/role/update';
  private deleteRoleUrl = environment.apiUrl + '/user/role/delete';

  constructor(private http: HttpClient, private auth: AuthService) { }

  // Get all roles
  getAllRoles(): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  // Create a new role
  createRole(roleData: any): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.createRoleUrl, roleData, { headers });
  }

  // Update a role
  updateRole(roleId: string, roleData: any): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.updateRoleUrl}/${roleId}`, roleData, { headers });
  }

  // Delete a role
  deleteRole(roleId: number): Observable<any> {
    const token = this.auth.getToken();
    const userId = this.auth.getUserId();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { is_deleted_by: userId };
    return this.http.put<any>(`${this.deleteRoleUrl}/${roleId}`, body, { headers });
    // Or use DELETE if backend uses DELETE:
    // return this.http.delete<any>(`${this.deleteRoleUrl}/${roleId}`, { headers });
  }
}
