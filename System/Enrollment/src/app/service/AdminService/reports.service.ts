import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment.staging';


@Injectable({
  providedIn: 'root'
})
export class AdminReportsService {
 private termUrl = environment.apiUrl + '/admin/reports';

 constructor(private http: HttpClient, private router: Router) {}


  /**
   * Fetches reports based on optional filters.
   * @param termId - The term ID to filter reports by.
   * @param roleId - The user role ID to filter by.
   * @param statusId - The status ID to filter by.
   */

   getReports(termId?: number, roleId?: number, statusId?: number): Observable<any> {
    let params = new HttpParams();

    if (termId !== undefined && termId !== null) {
      params = params.set('term_id', termId.toString());
    }
    if (roleId !== undefined && roleId !== null) {
      params = params.set('role_id', roleId.toString());
    }
    if (statusId !== undefined && statusId !== null) {
      params = params.set('status_id', statusId.toString());
    }

    return this.http.get<any>(this.termUrl, { params });
  }
  downloadPDF(termId?: number, roleId?: number, statusId?: number): Observable<Blob> {
    let params = new HttpParams();

    if (termId !== undefined && termId !== null) {
      params = params.set('term_id', termId.toString());
    }
    if (roleId !== undefined && roleId !== null) {
      params = params.set('role_id', roleId.toString());
    }
    if (statusId !== undefined && statusId !== null) {
      params = params.set('status_id', statusId.toString());
    }

    return this.http.get(`${this.termUrl}/pdf`, {
      params,
      responseType: 'blob' // important to get the file
    });
  }

}
