import db from "../../../config/db";
import { UserRoles } from "../../../models/userRoles";

export class selectRoles {

  // Get all active roles
  static async getRoles() {
    return db('user_roles').select('role_name', 'is_active').where('is_active', '=', 1);
  }

  // Create a new role
  static async createRole(role: UserRoles) {
    return db('user_roles')
      .insert({ role_name: role.role_name, is_active: role.is_active });
  }

  // Update an existing role by id
  static async updateRole(user: UserRoles) {
    return db('user_roles')
      .where('id', user.id)
      .update({ role_name: user.role_name, is_active: user.is_active, is_deleted: 0 });
  }

  // Delete a role by id
  static async deleteRole(role: UserRoles) {
    return db('user_roles')
      .where({id: role.id})
      .update({
        is_deleted: 1,
        is_deleted_by: role.is_deleted_by
      });
  }
}
