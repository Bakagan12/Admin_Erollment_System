import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.staging';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RetrieveDataService {
  private termUrl = environment.apiUrl + '/get_all/terms';
  private classificationUrl = environment.apiUrl + '/get_all/classifications';
  private enrollmentStatusUrl = environment.apiUrl + '/get_all/enrollment-statuses';
  private gradeLevelUrl = environment.apiUrl + '/get_all/grade-levels';
  private sectionUrl = environment.apiUrl + '/get_all/sections';
  private statusUrl = environment.apiUrl + '/get_all/statuses';
  private studentStatusUrl = environment.apiUrl + '/get_all/student-statuses';
  private subjectUrl = environment.apiUrl + '/get_all/subjects';
  private suffixUrl = environment.apiUrl + '/get_all/suffixes';
  private userRoleUrl = environment.apiUrl + '/get_all/user-roles';
  private semesterLevelUrl = environment.apiUrl + '/get_all/semester-level';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllTerm(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.termUrl}`, { headers });
  }
  getAllClassifications(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.classificationUrl}`, { headers });
  }
  getAllEnrollmentStatuses(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.enrollmentStatusUrl}`, { headers });
  }

  getAllGradeLevels(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.gradeLevelUrl}`, { headers });
  }

  getAllSections(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.sectionUrl}`, { headers });
  }

  getAllStatuses(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.statusUrl}`, { headers });
  }

  getAllStudentStatuses(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.studentStatusUrl}`, { headers });
  }

  getAllSubjects(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.subjectUrl}`, { headers });
  }

  getAllSuffixes(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.suffixUrl}`, { headers });
  }

  getAllUserRoles(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.userRoleUrl}`, { headers });
  }

  getAllSemesterLevels(): Observable<any> {
    const token = this.auth.getToken();
    console.log('User Role Token:' + token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.semesterLevelUrl}`, { headers });
  }

}
