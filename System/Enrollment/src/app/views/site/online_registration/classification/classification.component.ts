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
    if (this.registerForm.invalid) return;

    const userData = this.registerForm.value;
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
}
