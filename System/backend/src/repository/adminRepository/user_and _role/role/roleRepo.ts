import db from "../../../../config/db";
import { UserRoles } from "../../../../models/userRoles";
export class RoleRepo{
    static async get_role_list(role:UserRoles){
        return db('user_roles')
                .where('is_delete', 0)
                .where('is_active', 1)
                .select(
                    'id',
                    role.role_name,
                    role.is_deleted,
                    role.is_deleted_by,
                    role.updated_by
                );

    }
     static async create_role(role: UserRoles) {
        return db('user_roles').insert({
          role_name: role.role_name,
          is_active: role.is_active ?? 1,
          is_delete: 0,
          created_by: role.created_by,
          updated_by: role.updated_by
        });
      }
    
      static async update_role(id: number, role: Partial<UserRoles>) {
        return db('user_roles')
          .where({ id })
          .update({
            role_name: role.role_name,
            is_active: role.is_active,
            updated_by: role.updated_by,
            updated_at: db.fn.now()
          });
      }
    
      static async delete_role(id: number, deletedBy: number) {
        return db('user_roles')
          .where({ id })
          .update({
            is_delete: 1,
            is_deleted_by: deletedBy,
            deleted_at: db.fn.now()
          });
      }
}