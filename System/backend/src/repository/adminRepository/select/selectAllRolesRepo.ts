import  db from "../../../config/db";

export class selectRoles{
    static async getRoles(){
        return db('user_roles').select('role_name', 'is_active').where('is_active', '=', 1);
    }
}