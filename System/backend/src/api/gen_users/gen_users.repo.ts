import CrudRepo from "../utils/crud-repo";

export interface GenUser{
    id:number;
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
}

export default new CrudRepo<GenUser>("gen_users");