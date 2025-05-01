import db from '../../util/database';
import { GenUser } from '../../models/genUser';

export class authRepository {
    static async find(username: string): Promise<any> {
        return db('gen_users as u')
            .join('persons as p', 'u.person_id', 'p.id')
            .join('user_roles as r', 'u.user_role_id', 'r.id')
            .leftJoin('suffix', 'suffix.id', 'p.suffix_id')
            .whereRaw('LOWER(u.username) = ?', [username.toLowerCase()]) // case-insensitive
            .where('u.is_deleted', 0)
            .select(
                'u.*',
                'p.first_name',
                'p.last_name',
                'p.middle_name',
                'p.age',
                'p.date_of_birth',
                'p.place_of_birth',
                'p.gender',
                'p.citizenship',
                'p.email as person_email',
                'p.contact_no',
                'r.role_name'
            );
    }

    static async save(user: GenUser): Promise<any> {
        return db('gen_users').insert({
            person_id: user.person_id,
            guardian_id: user.guardian_id,
            username: user.username,
            password: user.password,
            user_role_id: user.user_role_id,
            change_pass_code: user.change_pass_code,
            status_id: user.status_id,
            gen_user_email: user.gen_user_email,
            is_emailed: user.is_emailed,
            is_deleted: user.is_deleted,
            is_deleted_by: user.is_deleted_by
        });
    }
}
