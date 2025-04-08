import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { AllUsersService } from '../../../../service/user/all-users.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface User {
  user_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gen_user_email: string;
  username: string;
  password: string;
  role_name: string;
  role_status: string;
  suffix: string;
  dob: string;
  gender: string;
  address: string;
  contact_number: string;
  emergency_contact_name: string;
  emergency_contact_number: string;
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
  selectedUser: User | null = null;
  selectedUserId: string ='';
  userForm: FormGroup;

  constructor(private userService: AllUsersService, private auth: AuthService, private fb: FormBuilder, private router: Router) {
    // Initialize form
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      suffix: [''],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      gen_user_email: ['', [Validators.required, Validators.email]],
      contact_number: ['', Validators.required],
      emergency_contact_name: ['', Validators.required],
      emergency_contact_number: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
      user_role_id: 12,
      status_id: 1,
      is_deleted: 0
    });


  }

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      this.userService.getAllUsers().subscribe(
        (users: User[]) => {
          this.users = users;
          console.log(users);
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
    this.selectedUserId = user.user_id;
    this.userForm.setValue({
      first_name: user.first_name || '',
      middle_name: user.middle_name || '',
      last_name: user.last_name || '',
      suffix: user.suffix || '',
      gen_user_email: user.gen_user_email || '',
      username: user.username || '',
      password: user.password || '',
      confirm_password: user.password || '',
      dob: user.dob || '',
      gender: user.gender || '',
      address: user.address || '',
      contact_number: user.contact_number || '',
      emergency_contact_name: user.emergency_contact_name || '',
      emergency_contact_number: user.emergency_contact_number || '',
      user_role_id: 12,
      status_id: 1,
      is_deleted: 0
    });
    this.isEditModalOpen = true;
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
  updateUser (): void {
    const updatedUser  = { ...this.userForm.value };

    // If password is empty, do not send it to the backend
    if (!updatedUser .password) {
        delete updatedUser .password; // Remove password if not provided
    }

    // Call the service to update the user
    this.userService.updateUser (this.selectedUserId, updatedUser ).subscribe({
        next: () => {
            alert('User  updated successfully!');
            this.getAllUsers(); // Refresh the user list
            this.isEditModalOpen = false;
        },
        error: (err) => {
            console.error('Update failed:', err);
            alert(`Failed to update user. Error: ${err.error?.message || 'Unknown error'}`);
        }
    });
}


  // Open Delete Modal
  openDeleteModal(user: User): void {
    this.selectedUserId = user.user_id;
    this.isDeleteModalOpen = true;
  }

  // Close Delete Modal
  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.selectedUserId = '';
    this.selectedUser = null;
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  // Delete User
  deleteUser(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.getAllUsers();
          this.closeDeleteModal();
        },

        error: (err) => console.error('Delete failed:', err)
      });
    }
  }
  onSubmit() {
    if (this.userForm.invalid) return;

    const userData = this.userForm.value;
    if (userData.password !== userData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    this.userService.createUser(userData).subscribe({
      next: (res) => {
        alert('User registered successfully!');
        this.userForm.reset();
        this.router.navigate(['/admin/dashboard/user/role']); // optional redirect
      },
      error: (err) => {
        console.error('Error creating user:', err);
        alert('Failed to register user.');
      }
    });
  }
}
