import { RoleRepo } from "../../../../repository/adminRepository/user_and _role/role/roleRepo";
import { UserRoles } from "../../../../models/userRoles";

export class RoleService {
  static async getRoleList(role: UserRoles) {
    return RoleRepo.get_role_list(role);
  }

  static async createRole(role: UserRoles) {
    return RoleRepo.create_role(role);
  }

  static async updateRole(id: number, role: Partial<UserRoles>) {
    return RoleRepo.update_role(id, role);
  }

  static async deleteRole(id: number, deletedBy: number) {
    return RoleRepo.delete_role(id, deletedBy);
  }
}
