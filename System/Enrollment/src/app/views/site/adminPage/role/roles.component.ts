import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../admin-dashboard/side-bar/side-bar.component';
import { HeaderComponent } from '../admin-dashboard/header/header.component';
import { FooterComponent } from '../admin-dashboard/footer/footer.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserRoleService } from '../../../../service/role/user-role.service';
import { AuthService } from '../../../../service/auth/auth.service';
import { PaginationService } from '../../../../utils/pagination-service.service';
import { AdminService } from '../../../../service/AdminService/admin.service';
import { SharedDeclarationsModule } from '../../../../shared_declations/shared.declarations.module';

interface Role {
  id: number;
  role_name: string;
  is_active: string;
}

@Component({
  standalone: true,
  selector: 'user-roles',
  imports: [SideBarComponent, SharedDeclarationsModule, HeaderComponent, FooterComponent, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './roles.component.html'
})
export class AnnouncementComponent implements OnInit {
  isModalOpen: boolean = false; // For Add Modal
  isEditModalOpen: boolean = false; // For Edit Modal
  isDeleteModalOpen: boolean = false; // For Delete Modal
  roleForm: FormGroup;
  roles: any[] = [];
  // filteredRoles: Role[] = [];
  isTokenValid: boolean = true;
  selectedRole: Role | null = null;
  selectedRoleToDelete: Role | null = null;
  selectedStatus: string = '1';

  //Pagination

  constructor(
    private fb: FormBuilder,
    private role: UserRoleService,
    private auth: AuthService,
    public pagination: PaginationService,
    private adminService: AdminService
  ) {
    // Initialize the form group
    this.roleForm = this.fb.group({
      roleName: ['', [Validators.required]],  // Role Name is required
      status: ['1', [Validators.required]] // Status is required
    });
  }

  ngOnInit(): void {
    const token = this.auth.getToken();
    this.loadRoleList();
  }
  loadRoleList(): void {
    this.adminService.getRoleList().subscribe({
      next: data => {
        this.roles = data;
        console.log('asczcpajspd', this.roles);
      },
      error: err => {

      }
    });
  }
  // Method to handle status change and update the view
  onStatusChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStatus = selectElement.value;
  }
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.roleForm.reset({ status: 1 }); // Reset the form, keeping the default status as 'active'
  }

  saveRole(): void {
    if (this.roleForm.valid) {
      const roleData = {
        role_name: this.roleForm.value.roleName,
        is_active: this.roleForm.value.status
      };

      this.adminService.createRole(roleData).subscribe(
        (response) => {
          console.log('Role created:', response);

          // Extracting the newly created role data
          const newRole = {
            id: response.data.id,
            role_name: response.data.role_name,
            is_active: response.data.is_active
          };
          if (newRole.is_active === 1) {
            // Add the newly created role to the roles array
            this.roles.push(newRole);

            // Automatically display the new role without page refresh
            this.roles = [...this.roles];


            setTimeout(() => {
              document.querySelector(`#role-${newRole.id}`)?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }
          // Close the modal after saving
          this.closeModal();


        },
        (error) => {
          console.error('Error creating role:', error);
        }
      );
    }
  }

  // Method to update the role (could include an API call)
  updateRole(): void {
    if (this.roleForm.valid && this.selectedRole) {
      const updatedRoleData = {
        role_name: this.roleForm.value.roleName,
        is_active: this.roleForm.value.status
      };
      // console.log(updatedRoleData);

      this.adminService.updateRole(this.selectedRole.id, updatedRoleData).subscribe(
        (response) => {
          const updatedRole = {
            id: response.updatedRole.id,
            role_name: response.updatedRole.role_name,
            is_active: response.updatedRole.is_active
          };
          console.log('Role updated:', updatedRole);

          const index = this.roles.findIndex(role => role.id === this.selectedRole?.id);

          if (index !== -1) {
            this.roles[index] = updatedRole;
          }
          this.roles = [...this.roles];

          setTimeout(() => {
            document.querySelector(`#role-${updatedRole.id}`)?.scrollIntoView({ behavior: 'smooth' });
          }, 200);

          this.closeEditModal();
        },
        (error) => {
          console.error('Error updating role:', error);
        }
      );
    }
  }


  // Method to open Delete Modal and store the role to be deleted
  openDeleteModal(role: Role): void {
    this.selectedRoleToDelete = role;
    this.isDeleteModalOpen = true;
  }

  // Method to close Delete Modal
  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.selectedRoleToDelete = null;  // Clear selected role to delete when closing
  }

  // Method to delete the role
  deleteRole(): void {
    if (this.selectedRoleToDelete) {
      this.adminService.deleteRole(this.selectedRoleToDelete.id).subscribe(
        (response) => {
          console.log('Role deleted:', response);

          // Remove the role from the roles array
          this.roles = this.roles.filter(role => role !== this.selectedRoleToDelete);

          this.closeDeleteModal();  // Close the delete modal after deleting
        },
        (error) => {
          console.error('Error deleting role:', error);
        }
      );
    }
  }



  // Method to open Edit Modal and populate the form with the role data
  openEditModal(role: Role): void {
    this.selectedRole = role;
    // console.log(this.selectedRole);
    this.roleForm.setValue({
      roleName: role.role_name,
      status: role.is_active
    });
    this.isEditModalOpen = true;
  }
  savedEdit(selectRoleById: any): void {
    const role_id = selectRoleById.id;
    const role = [selectRoleById.is_active, selectRoleById.role_name];
    console.log('ascxcm  role:', role_id, role);
    this.adminService.updateRole(role_id, role).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  // Method to close Edit Modal
  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.selectedRole = null;  // Clear selected role when closing
  }
  // ===========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Pagination Section <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<===========================
  //for Search and pagination
  sortColumn: string = 'id';
  // sortByIdAsc: boolean = true;
  sortAscending: boolean = true;


  get searchQuery(): string {
    return this.pagination.searchQuery;
  }
  set searchQuery(value: string) {
    this.pagination.setSearchQuery(value);
  }

  get currentPage(): number {
    return this.pagination.currentPage;
  }

  get itemsPerPage(): number {
    return this.pagination.itemsPerPage;
  }

  //Pagination Users
  get totalPages(): number {
    return Math.ceil(this.filteredRoles.length / this.itemsPerPage);
  }
  get sortByIdAsc(): boolean {
    return this.pagination.sortByIdAsc;
  }
  get filteredRoles() {
    let result = this.roles;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(role => {
        const fullName = `${role.role_name}`.toLowerCase();
        return fullName.includes(query);
      });
    }
    return result.sort((a, b) => {
      if (this.sortByIdAsc) {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }

  get paginatedRoles() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredRoles.slice(start, start + this.itemsPerPage);
  }


  // pages
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pagination.setCurrentPage(page);
    }
  }
  toggleSortByStudentName() {
    this.updateSort('student_name');
  }

  toggleSortByGradeLevel() {
    this.updateSort('grade_level');
  }
  toggleSortByStatus() {
    this.updateSort('status');
  }
  updateSort(column: string) {
    if (this.sortColumn === column) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }
  }
}
