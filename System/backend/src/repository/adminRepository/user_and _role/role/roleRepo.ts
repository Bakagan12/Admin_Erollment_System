import db from "../../../../config/db";
import { UserRoles } from "../../../../models/userRoles";
export class RoleRepo {
  static async get_role_list() {
    return db('user_roles')
      .where('is_deleted', 0)
      // .where('is_active', 1)al'salc;
      .select(
        'id',
        'role_name',
        'is_active',
        'is_deleted',
        'is_deleted_by',
        'updated_by'
      );

  }
  static async create_role(role: UserRoles) {
    return db('user_roles').insert({
      role_name: role.role_name,
      is_active: role.is_active ?? 1,
      is_deleted: 0,
      created_by: role.created_by,
      updated_by: role.updated_by
    });
  }

  static async update_role(id: number, role: any) {
    return db('user_roles')
      .where({ id })
      .update({
        role_name: role.role_name,
        is_active: role.is_active,
        updated_by: role.updated_by,
        updated_at: db.fn.now()
      });
  }
  // update_role_status
  static async update_role_status(id: number, status: number) {
    return db('user_roles')
      .where({ id })
      .update({
        is_active: status,
        updated_at: db.fn.now()
      });
  }
  static async delete_role(id: number, deletedBy: number) {
    return db('user_roles')
      .where({ id })
      .update({
        is_deleted: 1,
        is_active: 0,
        is_deleted_by: deletedBy
        // deleted_at: db.fn.now()
      });
  }
}