import { AllUsersService } from './../../../../service/user/all-users.service';
import { FooterComponent } from '../../adminPage/admin-dashboard/footer/footer.component';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuffixService } from '../../../../service/suffix/suffix.service';
import { PaginationService } from '../../../../utils/pagination-service.service';
import { AdminService } from '../../../../service/AdminService/admin.service';
import { LoadingService } from '../../../../utils/loding_template.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule, FooterComponent],
  standalone: true
})
export class ClassificationComponent implements OnInit {
  openModal: boolean = false;
  registerForm!: FormGroup;
  user_role_id: string = '';
  status_id: string = '';
  is_deleted: string = '';
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
  confirmPasswordsError: string = '';
  formError: string = '';

  constructor(
    private fb: FormBuilder,
    private suffix: SuffixService,
    private userService: AllUsersService,
    private router: Router,
    public pagination: PaginationService,
    private adminService: AdminService,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
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
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
      user_role_id: 12,
      status_id: 1,
      is_deleted: 0
    });
  }

  onSubmit() {
    this.loadingService.show();
    const userData = this.registerForm.value;

    // Reset previous errors before starting the checks
    this.first_nameError = '';
    this.middle_nameError = '';
    this.last_nameError = '';
    this.suffixError = '';
    this.dobError = '';
    this.genderError = '';
    this.addressError = '';
    this.gen_user_emailError = '';
    this.contact_numberError = '';
    this.emergency_contact_nameError = '';
    this.emergency_contact_numberError = '';
    this.passwordsError = '';
    this.confirmPasswordsError = '';
    this.formError = '';

    // Check individual field errors
    let hasErrors = false;

    if (!userData.first_name) {
      this.first_nameError = 'First Name is required';
      hasErrors = true;
    }
    if (!userData.middle_name) {
      this.middle_nameError = 'Middle Name is required';
      hasErrors = true;
    }
    if (!userData.last_name) {
      this.last_nameError = 'Last Name is required';
      hasErrors = true;
    }
    if (!userData.suffix) {
      this.suffixError = 'Suffix is required';
      hasErrors = true;
    }
    if (!userData.dob) {
      this.dobError = 'Date of Birth is required';
      hasErrors = true;
    }
    if (!userData.gender) {
      this.genderError = 'Gender is required';
      hasErrors = true;
    }
    if (!userData.address) {
      this.addressError = 'Address is required';
      hasErrors = true;
    }
    if (!userData.gen_user_email) {
      this.gen_user_emailError = 'Email is required';
      hasErrors = true;
    }
    if (!userData.contact_number) {
      this.contact_numberError = 'Contact Number is required';
      hasErrors = true;
    }
    if (!userData.emergency_contact_name) {
      this.emergency_contact_nameError = 'Emergency Contact Name is required';
      hasErrors = true;
    }
    if (!userData.emergency_contact_number) {
      this.emergency_contact_numberError = 'Emergency Contact Number is required';
      hasErrors = true;
    }
    if (!userData.password) {
      this.passwordsError = 'Password is required';
      hasErrors = true;
    }
    if (!userData.confirm_password) {
      this.confirmPasswordsError = 'Confirm Password is required';
      hasErrors = true;
    }

    // Password match check
    if (userData.password && userData.confirm_password && userData.password !== userData.confirm_password) {
      this.formError = 'Passwords do not match!';
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.gen_user_email && !emailRegex.test(userData.gen_user_email)) {
      this.formError = 'Invalid email format!';
      return;
    }

    // If there are errors, return early and don't submit
    if (hasErrors) {
      this.formError = 'All fields are required!';
      return;
    }

    // Proceed to submit the form if no errors
    console.log('Submitting form with:', userData);
    this.userService.createUser(userData).subscribe({
      next: (res) => {
        this.registerForm.reset();
        this.loadingService.hide();
        console.log(res);
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Error creating user:', err);
        if (err.error?.message) {
          this.formError = err.error.message;
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
