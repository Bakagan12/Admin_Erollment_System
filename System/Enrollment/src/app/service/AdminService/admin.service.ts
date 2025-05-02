import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

export interface Announcement {
  title: string;
  description: string;
  role_id: number;
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = environment.apiUrl + '/admin';
  private baseUrlEnrolled = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // ========================= Announcements =========================
  getAllAnnouncements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_announcement`, { headers: this.getAuthHeaders() });
  }

  getAnnouncementById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/selected/${id}`, { headers: this.getAuthHeaders() });
  }

  createAnnouncement(data: Announcement): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data, { headers: this.getAuthHeaders() });
  }

  updateAnnouncement(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, data, { headers: this.getAuthHeaders() });
  }

  deleteAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers: this.getAuthHeaders() });
  }

  // ========================= Select Users =========================
  getOverAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_all/users`, { headers: this.getAuthHeaders() });
  }

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/select/all_students`, { headers: this.getAuthHeaders() });
  }
  getAllStudentsFromRegistrar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/select/all_students/from_registrar`, { headers: this.getAuthHeaders() });
  }
  getAllStudentsFromCashier(): Observable<any> {
    return this.http.get(`${this.baseUrl}/select/all_students/from_cashier`, { headers: this.getAuthHeaders() });
  }
  getAllStudentsFromGuidance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/select/all_students/from_guidance`, { headers: this.getAuthHeaders() });
  }
  passStudentsFromGuidance(enrollment_id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/select/all_students/from_guidance_pass`, { enrollment_id }, { headers: this.getAuthHeaders() });
  }

  approveStudentsFromCashier(enrollment_id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/from_cashier/approved`, { enrollment_id }, { headers: this.getAuthHeaders() });
  }

  approveStudentsFromGuidance(enrollment_id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/from_guidance/approved`, { enrollment_id }, { headers: this.getAuthHeaders() });
  }
  approveStudentsFromRegistrar(enrollment_id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/from_registrar/approved`, { enrollment_id }, { headers: this.getAuthHeaders() });
  }

  approveEnrolledStudentsFromRegistrar(enrollment_id: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/from_registrar/approved_enrolled`, { enrollment_id }, { headers: this.getAuthHeaders() });
  }

  getAllTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/select/all_teachers`, { headers: this.getAuthHeaders() });
  }


  // ========================= Create Users =========================
  createDepartmentalUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/departmental/user`, data, { headers: this.getAuthHeaders() });
  }

  createStudentUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/student/user`, data, { headers: this.getAuthHeaders() });
  }

  // ========================= Roles =========================
  getRoleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/roles/list`, { headers: this.getAuthHeaders() });
  }

  createRole(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/roles/create`, data, { headers: this.getAuthHeaders() });
  }

  updateRole(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/roles/update/${id}`, data, { headers: this.getAuthHeaders() });
  }
  // update_status
  updateRoleStatus(id: number, status: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/roles/update_status/${id}`, status, { headers: this.getAuthHeaders() });
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/roles/delete/${id}`, { headers: this.getAuthHeaders() });
  }

  // ========================= Users =========================
  getUserByUserId(user_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/by_user_id`, {
      params: { user_id: user_id },
      headers: this.getAuthHeaders()
    });
  }
  getUserByRoleId(roleId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/by_user_id/${roleId}`, { headers: this.getAuthHeaders() });
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/getAllUsersOnAdminPage`, { headers: this.getAuthHeaders() });
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/create`, user, { headers: this.getAuthHeaders() });
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/${id}`, data, { headers: this.getAuthHeaders() });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`, { headers: this.getAuthHeaders() });
  }

  // ========================= Reports =========================
  getReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reports`, { headers: this.getAuthHeaders() });
  }

  // ========================= Dashboard: Students & Teachers =========================
  getDashboardStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`, { headers: this.getAuthHeaders() });
  }

  getDashboardTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers`, { headers: this.getAuthHeaders() });
  }

  getEnrolledStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/enrolled`, { headers: this.getAuthHeaders() });
  }
  getStudentsEnrolledOnline(): Observable<any> {
    return this.http.get(`${this.baseUrlEnrolled}/enrolled_students/enrolled-students`, { headers: this.getAuthHeaders() });
  }
}
