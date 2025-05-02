import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../login/header/header.component';
import { FooterComponent } from '../../adminPage/admin-dashboard/footer/footer.component';
import { Router } from '@angular/router';
import { FormDataService } from '../../../../service/onlineforms/forms.service';
import { EmailService } from '../../../../service/mailer/email.service';
import { SharedDeclarationsModule } from '../../../../shared_declations/shared.declarations.module';
import { NumberOnlyService } from '../../../../utils/number-only.service';

@Component({
  standalone: true,
  selector: 'app-pass-code',
  imports: [HeaderComponent, SharedDeclarationsModule],
  templateUrl: './pass-code.component.html',
  styles: ``
})
export class PassCodeComponent {
  email: string | null = null;
  user_id: string | null = null;
  username: string | null = null;
  change_pass_code: string | null = null;
  enteredCode: string = '';

  showSuccessModal: boolean = false;
  showErrorModal: boolean = false;

  constructor(public number_only: NumberOnlyService, private formDataService: FormDataService, private router: Router, private emailService: EmailService) { }
  ngOnInit(): void {
    this.email = this.formDataService.getStepData('forgotPasswordEmail');

    this.email = localStorage.getItem('gen_user_email');
    const userData = this.emailService.getStoredUserData();

    this.username = userData.username;
    this.change_pass_code = userData.change_pass_code;
    this.user_id = userData.user_id;

    // console.log('user_id:', this.username, this.user_id);
    // console.log('Change Pass Code:', this.change_pass_code);
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Block non-numeric keys
    }
  }
  submitCode(): void {
    // console.log(this.change_pass_code);
    if (this.enteredCode === this.change_pass_code) {
      this.showSuccessModal = true;
      setTimeout(() => {
        this.router.navigate(['/change_password']);
      }, 2000); // Optional delay before navigating
    } else {
      this.showErrorModal = true;
    }
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/change_password']);
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

}
