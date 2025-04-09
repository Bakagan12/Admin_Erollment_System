import { FooterComponent } from '../../adminPage/admin-dashboard/footer/footer.component';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuffixService } from '../../../../service/suffix/suffix.service';
import { AllUsersService } from '../../../../service/user/all-users.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule, FooterComponent],
  standalone: true
})
export class ClassificationComponent implements OnInit {
  registerForm!: FormGroup;
  user_role_id: string= '';
  status_id: string= '';
  is_deleted: string= '';
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

  constructor(
    private fb: FormBuilder,
    private suffix: SuffixService,
    private userService: AllUsersService,
    private router: Router
  ) {}

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
    // if (this.registerForm.invalid) return;

    const userData = this.registerForm.value;

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
      alert('Passwords do not match!');
      return;
    }

    this.userService.createUser(userData).subscribe({
      next: (res) => {
        alert('User registered successfully!');
        this.registerForm.reset();
        this.router.navigate(['/auth/login']); // optional redirect
      },
      error: (err) => {
        console.error('Error creating user:', err);
        alert('Failed to register user.');
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
