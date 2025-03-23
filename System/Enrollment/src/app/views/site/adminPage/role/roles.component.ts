import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserRoleService } from '../../../../service/role/user-role.service';
import { AuthService } from '../../../../service/auth/auth.service';

interface Role {
  role_name: string;
  is_active: string;
}

@Component({
  standalone: true,
  selector: 'user-roles',
  imports: [SideBarComponent, HeaderComponent, FooterComponent, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './roles.component.html'
})
export class AnnouncementComponent implements OnInit{
  isModalOpen: boolean = false;
  roleForm: FormGroup;
  roles: Role[] = [];
  isTokenValid: boolean = true;

  constructor(private fb: FormBuilder, private role: UserRoleService, private auth: AuthService) {
    // Initialize the form group
    this.roleForm = this.fb.group({
      roleName: ['', [Validators.required]],  // Role Name is required
      status: ['active', [Validators.required]] // Status is required
    });
  }

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      this.role.getAllRoles().subscribe(
        (roles: Role[] ) => {
          this.roles = roles;  // Store all users in the 'users' array
          console.log("User Roles",roles);
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

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.roleForm.reset({ status: 'active' }); // Reset the form, keeping the default status as 'active'
  }

  saveRole(): void {
    if (this.roleForm.valid) {
      const roleName = this.roleForm.value.roleName;
      const roleStatus = this.roleForm.value.status;

      // Handle save logic here (e.g., make an API call to save the role)

      console.log('Role Name:', roleName);
      console.log('Role Status:', roleStatus);

      this.closeModal();  // Close the modal after saving
    }
  }
}
