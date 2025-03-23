import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserRoleService } from '../../../../service/role/user-role.service';
import { AuthService } from '../../../../service/auth/auth.service';
import {AllStudentService} from '../../../../service/student/all-student.service';
import {AllUsersService} from '../../../../service/user/all-users.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, SideBarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalRoles: number = 0;
  totalStudents: number = 0;
  totalUsers: number = 0;
  isTokenValid: boolean = true;

  constructor(
    private userRoleService: UserRoleService,
    private auth: AuthService,
    private AllStudentService: AllStudentService,
    private AllUsersService: AllUsersService
  ) {}

  ngOnInit(): void {
    const token = this.auth.getToken(); // Get the token here

    if (token) {
      // If token exists, proceed to fetch roles
      this.userRoleService.getAllRoles().subscribe(
        (roles) => {
          console.log('Roles fetched:', roles);
          this.totalRoles = roles.length;
        },
        (error) => {
          console.error('Error fetching roles:', error);
          this.isTokenValid = false;
        }
      );
      this.AllStudentService.getAllStudents().subscribe(
        (students) => {
          console.log('Roles fetched:', students);
          this.totalStudents = students.length;
        },
        (error) => {
          this.isTokenValid = false;
        }
      );
      this.AllUsersService.getAllUsers().subscribe(
        (users) => {
          this.totalUsers = users.length;

        },
        (error) => {
          console.error('Error fetching users:', error);
          this.isTokenValid = false;
        }
      );
    } else {
      // If no token, display an error or redirect to login
      console.error('No token found. Redirecting to login...');
      this.isTokenValid = false;
      // Optionally, you can redirect to the login page here
      // this.router.navigate(['/auth/login']);
    }
  }
}
