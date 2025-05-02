import { RoleRepo } from "../../../../repository/adminRepository/user_and _role/role/roleRepo";
import { UserRoles } from "../../../../models/userRoles";

export class RoleService {
  static async getRoleList() {
    return RoleRepo.get_role_list();
  }

  static async createRole(role: UserRoles) {
    return RoleRepo.create_role(role);
  }
  //updates

  static async updateRole(id: number, role: any) {
    return RoleRepo.update_role(id, role);
  }
  // updateRoleStatus
  static async updateRoleStatus(id: number, status: number) {
    return RoleRepo.update_role_status(id, status);
  }
  static async deleteRole(id: number, deletedBy: number) {
    return RoleRepo.delete_role(id, deletedBy);
  }
}
