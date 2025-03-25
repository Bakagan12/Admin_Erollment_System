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
  isModalOpen: boolean = false; // For Add Modal
  isEditModalOpen: boolean = false; // For Edit Modal
  isDeleteModalOpen: boolean = false; // For Delete Modal
  roleForm: FormGroup;
  roles: Role[] = [];
  isTokenValid: boolean = true;
  selectedRole: Role | null = null; // For storing the selected role when editing
  selectedRoleToDelete: Role | null = null; // For storing the role to be deleted

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
          this.roles = roles;  // Store all users in the 'roles' array
          console.log("User Roles", roles);
        },
        (error) => {
          console.error('Error fetching roles:', error);
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

  // Method to open Edit Modal and populate the form with the role data
  openEditModal(role: Role): void {
    this.selectedRole = role;
    this.roleForm.setValue({
      roleName: role.role_name,
      status: role.is_active === '1' ? 'active' : 'inactive' // Mapping is_active to 'active'/'inactive'
    });
    this.isEditModalOpen = true;
  }

  // Method to close Edit Modal
  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedRole = null;  // Clear selected role when closing
  }

  // Method to update the role (could include an API call)
  updateRole(): void {
    if (this.roleForm.valid && this.selectedRole) {
      const updatedRole = {
        ...this.selectedRole,
        role_name: this.roleForm.value.roleName,
        is_active: this.roleForm.value.status === 'active' ? '1' : '0'
      };

      // Handle update logic here (e.g., make an API call to update the role)
      console.log('Updated Role:', updatedRole);

      // Update the roles array with the modified role
      const index = this.roles.findIndex(role => role === this.selectedRole);
      if (index !== -1) {
        this.roles[index] = updatedRole;
      }

      this.closeEditModal();  // Close the edit modal after updating
    }
  }

  // Method to open Delete Modal and store the role to be deleted
  openDeleteModal(role: Role): void {
    this.selectedRoleToDelete = role;
    this.isDeleteModalOpen = true;
  }

  // Method to close Delete Modal
  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.selectedRoleToDelete = null;  // Clear selected role to delete when closing
  }

  // Method to delete the role
  deleteRole(): void {
    if (this.selectedRoleToDelete) {
      // Handle delete logic here (e.g., make an API call to delete the role)
      console.log('Role deleted:', this.selectedRoleToDelete);

      // Remove the role from the roles array
      this.roles = this.roles.filter(role => role !== this.selectedRoleToDelete);

      this.closeDeleteModal();  // Close the delete modal after deleting
    }
  }
}
