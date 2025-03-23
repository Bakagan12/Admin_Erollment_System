import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { AllUsersService } from '../../../../service/user/all-users.service';
import { AuthService } from '../../../../service/auth/auth.service';

interface User {
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  role_name: string;
  role_status: string;
}

@Component({
  standalone: true,
  selector: 'app-user-roles',
  imports: [SideBarComponent, HeaderComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './user.component.html'
})
export class UserRolesComponent implements OnInit {
  openModal: boolean = false;
  users: User[] = [];  // Array to hold all users fetched from the backend
  isTokenValid: boolean = true;

  constructor(private user: AllUsersService, private auth: AuthService) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      this.user.getAllUsers().subscribe(
        (users: User[]) => {
          this.users = users;  // Store all users in the 'users' array
        },
        (error) => {
          console.error('Error fetching users:', error);
          this.isTokenValid = false;
        }
      );
    } else {
      console.error('No token found. Redirecting to login...');
      this.isTokenValid = false;
      // Optionally, redirect to the login page
      // this.router.navigate(['/auth/login']);
    }
  }
}
