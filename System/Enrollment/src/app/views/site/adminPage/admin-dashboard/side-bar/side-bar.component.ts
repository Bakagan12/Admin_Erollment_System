import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../service/auth/auth.service';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {
  activeLink: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }

  logout(): void {
    this.authService.logout();
    this.activeLink = 'logout';
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