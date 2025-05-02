import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../../adminPage/admin-dashboard/header/header.component';
import { AuthService } from '../../../../service/auth/auth.service';
@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) { }
  logout(): void {
    this.authService.logout();
  }
}
