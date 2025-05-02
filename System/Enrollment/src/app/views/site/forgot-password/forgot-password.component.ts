import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../adminPage/admin-dashboard/footer/footer.component';
import { HeaderComponent } from '../login/header/header.component';
import { EmailService } from '../../../service/mailer/email.service';
import { FormDataService } from '../../../service/onlineforms/forms.service';
import { LoadingService } from '../../../utils/loding_template.service';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [RouterModule, HeaderComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent {
  emailForm: FormGroup;
  errorMessage: string | null = null;

  showLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private router: Router,
    private formDataService: FormDataService,
    private loadingService: LoadingService
  ) {
    // Initialize form group with form controls and validators
    this.emailForm = this.formBuilder.group({
      recipient: ['', [Validators.required, Validators.email]],  // Email validation
    });
  }

  // Handle email submission
  sendEmail() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      this.loadingService.show();

      this.formDataService.saveStepData('forgotPasswordEmail', emailData.recipient);
      // Call the emailService's sendEmail method
      this.emailService.sendEmail(emailData.recipient).subscribe(
        () => {
          // After email is sent, navigate to the ChangePasswordComponent
          this.loadingService.hide();
          this.router.navigate(['/forgot/password/pass_code']);
        },
        (error) => {
          this.loadingService.hide();
          this.errorMessage = 'There was an error sending the email. Please try again.';
        }
      );

      // Reset form after submission
      this.emailForm.reset();
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

}
