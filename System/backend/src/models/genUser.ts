import db from "../config/db";

export class GenUser {
    id?:number;
    username: string;
    gen_user_email:string;
    password: string;
    person_id:number;
    guardian_id: number;
    user_role_id: number;
    change_pass_code: number;
    status_id:number;
    is_emailed:boolean;
    is_deleted:number;
    is_deleted_by:number;

    constructor(id:number, username: string,gen_user_email:string, password: string, person_id:number,guardian_id: number, user_role_id: number, change_pass_code: number, status_id:number, is_emailed:boolean, is_deleted:number, is_deleted_by:number) {
        this.id = id;
        this.username = username;
        this.gen_user_email = gen_user_email;
        this.password = password;
        this.person_id = person_id;
        this.guardian_id = guardian_id;
        this.user_role_id = user_role_id;
        this.status_id = status_id;
        this.change_pass_code = change_pass_code;
        this.is_emailed = is_emailed;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
    }
    static async findByEmail(email: string): Promise<GenUser | null> {
    const row = await db('gen_users')
        .where({ gen_user_email: email, is_deleted: 0, status_id: 1 })
        .first();

    if (!row) return null;

    return new GenUser(
        row.id,
        row.username,
        row.gen_user_email,
        row.password,
        row.person_id,
        row.guardian_id,
        row.user_role_id,
        row.status_id,
        row.change_pass_code,
        row.is_emailed,
        row.is_deleted,
        row.is_deleted_by
    );
}
}
