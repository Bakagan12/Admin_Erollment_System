import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { AllUsersService } from '../../../../service/user/all-users.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  imports: [SideBarComponent, HeaderComponent, FooterComponent,FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
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
  formError: string = '';
  first_nameError: string = '';
  middle_nameError: string = '';
  last_nameError: string = '';
  suffixError: string = '';
  dobError: string = '';
  genderError: string = '';
  addressError: string = '';
  gen_user_emailError: string = '';
  contact_numberError: string = '';
  emergency_contact_nameError: string = '';
  emergency_contact_numberError: string = '';
  passwordsError: string = '';

    //Pagination
    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalPages: number = 1;
    paginatedRoles: User[] = [];

  //for search
  filteredUsers: any[] = [];
  searchTerm: string = '';

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
      contact_number: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
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
  updatePaginatedRoles(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedRoles = this.users.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedRoles();
    }
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.updatePaginatedRoles();
  }
  ngOnInit(): void {
    this.loadUsers();
    const token = this.auth.getToken();
    if (token) {
      this.userService.getAllUsers().subscribe(
        (users: User[]) => {
          this.users = users;
          this.setupPagination();
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
  loadUsers() {
    this.userService.getAllUsers().subscribe((res: any[]) => {
      this.users = res;
      this.filteredUsers = res;
    });
  }

  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.first_name.toLowerCase().includes(term) ||
      user.last_name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      (user.middle_name && user.middle_name.toLowerCase().includes(term)) ||
      user.gen_user_email.toLowerCase().includes(term)
    );
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
     // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(updatedUser.gen_user_email)) {
      alert('Invalid email format!');
      return;
    }
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

    const userData = this.userForm.value;
    if (!userData.first_name){
      this.first_nameError = 'First Name is required';
      return;
    }
    else if (!userData.middle_name){
      this.middle_nameError = 'Middle Name is required';
      return;
    }
    else if (!userData.last_name){
      this.last_nameError = 'Last Name is required';
      return;
    }
    else if (!userData.suffix) {
      this.suffixError = 'Suffix is required';
      return;
    }
    else if (!userData.dob){
      this.dobError = 'Date of Birth is required';
      return;
    }
    else if (!userData.gender){
      this.genderError = 'Gender is required';
      return;
    }
    else if (!userData.address){
      this.addressError = 'Address is required';
      return;
    }
    else if (!userData.gen_user_email){
      this.gen_user_emailError = 'Email is required';
      return;
    }
    else if (!userData.contact_number){
      this.contact_numberError = 'Contact Number is required';
      return;
    }
    else if (!userData.emergency_contact_name){
      this.emergency_contact_nameError = 'Emergency Contact Name is required';
      return;
    }
    else if (!userData.emergency_contact_number) {
      this.emergency_contact_numberError = 'Emergency Contact Number is required';
      return;
    }
    else if (!userData.password) {
      this.passwordsError = 'Password is required';
      return;
    }
    if (userData.password !== userData.confirm_password) {
      this.formError = 'Passwords do not match!';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.gen_user_email)) {
      this.formError = 'Invalid email format!';
      // alert('');
      return;
    }

    this.userService.createUser(userData).subscribe({
      next: (res) => {
        // alert('User registered successfully!');
        this.userForm.reset();
        this.openModal = false;
        // this.router.navigate(['/admin/dashboard/user/role']); // optional redirect
      },
      error: (err) => {
        console.error('Error creating user:', err);
        if (err.error?.message) {
          this.formError = err.error.message; // Display specific error message
        // General error message
        }
      }
    });
  }
  allowNumbersOnly(event: KeyboardEvent): boolean {
    const charCode = event.key.charCodeAt(0);
    // Allow only digits 0-9
    if (charCode >= 48 && charCode <= 57) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
