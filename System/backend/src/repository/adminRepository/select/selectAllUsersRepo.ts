import  db from "../../../config/db";


export class selectAllUsers{
    static async getAllUsers(){
        return db('gen_users').leftJoin('persons', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
                .leftJoin('status', 'gen_users.status_id', 'status.id')
                .where('gen_users.status_id', '=', 1)
                .where('gen_users.is_deleted', '!=', 1)
                .where('user_roles.is_active', '=', 1)
                .select(
                    'gen_users.id as user_id',
                    'persons.first_name',
                    'persons.middle_name',
                    'persons.last_name',
                    'persons.email',
                    'user_roles.role_name',
                    'status.status_name',
                    'gen_users.created_at',
                    'gen_users.is_deleted_by',
                    'status.status_name'


                )
    }
}