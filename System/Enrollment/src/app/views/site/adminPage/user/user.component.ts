import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { AllUsersService } from '../../../../service/user/all-users.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
  imports: [SideBarComponent, HeaderComponent, FooterComponent, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './user.component.html'
})
export class UserRolesComponent implements OnInit {
  openModal: boolean = false;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  users: User[] = [];
  selectedUser: User | null = null; // Store selected user for edit or delete
  userForm: FormGroup;

  constructor(private userService: AllUsersService, private auth: AuthService, private fb: FormBuilder) {
    // Initialize form
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role_name: ['', Validators.required],
      role_status: ['active']
    });
  }

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      this.userService.getAllUsers().subscribe(
        (users: User[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
    } else {
      console.error('No token found');
    }
  }

  // Open Edit Modal and populate form
  openEditModal(user: User): void {
    this.selectedUser = user;
    this.isEditModalOpen = true;
    this.userForm.patchValue(user); // Pre-populate the form fields
  }

  // Close Edit Modal
  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedUser = null;
  }

  // Save User (for Create Modal)
  saveUser(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      // Call service to save the new user
      console.log('User created:', newUser);
      this.openModal = false;
    }
  }

  // Update User (for Edit Modal)
  updateUser(): void {
    if (this.userForm.valid && this.selectedUser) {
      const updatedUser = { ...this.selectedUser, ...this.userForm.value };
      // Call service to update the user
      console.log('User updated:', updatedUser);
      this.isEditModalOpen = false;
    }
  }

  // Open Delete Modal
  openDeleteModal(user: User): void {
    this.selectedUser = user;
    this.isDeleteModalOpen = true;
  }

  // Close Delete Modal
  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.selectedUser = null;
  }

  // Delete User
  deleteUser(): void {
    if (this.selectedUser) {
      // Call service to delete user
      console.log('User deleted:', this.selectedUser);
      this.isDeleteModalOpen = false;
      // Optionally, remove the user from the list
      this.users = this.users.filter(u => u !== this.selectedUser);
    }
  }
}
