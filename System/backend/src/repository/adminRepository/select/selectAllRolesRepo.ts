import db from "../../../config/db";
import { UserRoles } from "../../../models/userRoles";

export class selectRoles {

  // Get all active roles
  static async getRoles() {
    return db('user_roles').select('id','role_name', 'is_active').where('is_deleted', '!=', 1);
  }

  // Create a new role
  static async createRole(role: UserRoles) {
    return db('user_roles')
      .insert({ role_name: role.role_name, is_active: role.is_active });
  }
  static async getRoleById(roleId: number) {
    return db('user_roles')
      .select('id', 'role_name', 'is_active')
      .where({ id: roleId })
      .first();  // Fetch a single role
}
  // Update an existing role by id
  static async updateRole(user: UserRoles, roleID:number) {
    return db('user_roles')
      .where({id:roleID})
      .update({
         role_name: user.role_name,
         is_active: user.is_active,
         is_deleted: 0
        });
  }

  // Delete a role by id
  // This is your updated `deleteRole` method:
  static async deleteRole(roleID: number, is_deleted_by: any) {
    const { deleted_by } = is_deleted_by;
    return db('user_roles')
      .where({ id: roleID })
      .update({
        is_deleted: 1,
        is_deleted_by: deleted_by,
      });
  }
  
}
