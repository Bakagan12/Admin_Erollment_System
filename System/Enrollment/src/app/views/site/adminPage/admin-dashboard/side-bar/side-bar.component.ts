import { Component } from '@angular/core';
import {AuthService} from '../../../../../service/auth/auth.service'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
constructor (private authService: AuthService, private router: Router){}
  logout(): void{
    this.authService.logout();
  }
  goToUserRoles() {
    this.router.navigate(['/admin/dashboard/user/role']);
  }

  goToAnnouncements() {
    this.router.navigate(['/admin/dashboard/announcements']);
  }
  goToReports() {
    this.router.navigate(['/admin/dashboard/reports']);
  }
}
