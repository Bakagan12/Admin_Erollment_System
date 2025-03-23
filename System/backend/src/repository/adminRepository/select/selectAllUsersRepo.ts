import  db from "../../../config/db";


export class selectAllUsers{
    static async getAllUsers(){
        return db('gen_users').leftJoin('status', 'gen_users.status_id', 'status.id')
        .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
        .leftJoin('persons', 'gen_users.person_id', 'persons.id')
        .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
                // .where('gen_users.status_id', '=', 1)
                // .where('gen_users.is_deleted', '!=', 1)
                .where('user_roles.is_active', '=', 1)
                .select(
                    'gen_users.id as user_id',
                    'gen_users.username',
                    'gen_users.password',
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