import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'user-roles',
  imports: [SideBarComponent, HeaderComponent, FooterComponent, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './announcements.component.html'
})
export class AnnouncementComponent {
  isModalOpen: boolean = false;
  roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group
    this.roleForm = this.fb.group({
      roleName: ['', [Validators.required]],  // Role Name is required
      status: ['active', [Validators.required]] // Status is required
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.roleForm.reset({ status: 'active' }); // Reset the form, keeping the default status as 'active'
  }

  saveRole(): void {
    if (this.roleForm.valid) {
      const roleName = this.roleForm.value.roleName;
      const roleStatus = this.roleForm.value.status;

      // Handle save logic here (e.g., make an API call to save the role)

      console.log('Role Name:', roleName);
      console.log('Role Status:', roleStatus);

      this.closeModal();  // Close the modal after saving
    }
  }
}
