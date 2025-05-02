import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../login/header/header.component';
import { FooterComponent } from '../../adminPage/admin-dashboard/footer/footer.component';
import { Router } from '@angular/router';
import { FormDataService } from '../../../../service/onlineforms/forms.service';
import { EmailService } from '../../../../service/mailer/email.service';
import { SharedDeclarationsModule } from '../../../../shared_declations/shared.declarations.module';
import { LoadingService } from '../../../../utils/loding_template.service';
import { UpdatePasswordService } from '../../../../service/update_password/update-password.service';

@Component({
  standalone: true,
  selector: 'app-change-password',
  imports: [HeaderComponent, SharedDeclarationsModule],
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent implements OnInit {
  email: string | null = null;
  username: string | null = null;
  change_pass_code: string | null = null;
  user_id: string | null = null;

  newPassword: string = '';
  confirm_newPassword: string = '';
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private updatePasswordService: UpdatePasswordService,
    private formDataService: FormDataService,
    private emailService: EmailService
  ) { }
  ngOnInit(): void {
    this.email = this.formDataService.getStepData('forgotPasswordEmail');

    this.email = localStorage.getItem('gen_user_email');
    const userData = this.emailService.getStoredUserData();

    this.username = userData.username;
    this.change_pass_code = userData.change_pass_code;
    this.user_id = userData.user_id;

    // console.log('Username:', this.username);
    // console.log('Change Pass Code:', this.change_pass_code);
    // console.log('User ID:', this.user_id);
  }
  onChangePassword(): void {
    if (!this.newPassword.trim() || !this.confirm_newPassword.trim()) {
      this.errorMessage = 'Both password fields are required.';
      return;
    }
    if (this.newPassword !== this.confirm_newPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (!this.user_id) {
      this.errorMessage = 'Missing user ID.';
      return;
    }

    this.loadingService.show(); // show loading spinner

    this.updatePasswordService.updatePassword(this.user_id, this.newPassword).subscribe({
      next: () => {
        this.loadingService.hide();
        this.router.navigate(['/auth/login']);
      },
      error: (error: any) => {
        this.loadingService.hide();
        this.errorMessage = 'Failed to update password. Please try again.';
        // console.error(error);
      }
    });
  }
}
