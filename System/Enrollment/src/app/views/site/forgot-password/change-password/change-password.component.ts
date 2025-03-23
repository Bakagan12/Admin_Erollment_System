import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup;
  passwordVisible: boolean = false; // To toggle password visibility
  errorMessage: string = ''; // To display any error message if needed

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form group
    this.changePasswordForm = this.fb.group({
      username: [{ value: '', disabled: true }, Validators.required],  // Username field is readonly
      newPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    // Optionally populate the username field if needed
    // this.changePasswordForm.patchValue({ username: 'some_username' });
  }

  // Toggles password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Reset password functionality (this will be linked to the form submission)
  resetPassword() {
    if (this.changePasswordForm.valid) {
      const formValues = this.changePasswordForm.value;
      console.log('Form Submitted:', formValues);
      // Call your service here to handle the password change
    } else {
      this.errorMessage = 'Please ensure all fields are filled correctly.';
    }
  }

  // Getter for easier form validation checking
  get f() {
    return this.changePasswordForm.controls;
  }
}
