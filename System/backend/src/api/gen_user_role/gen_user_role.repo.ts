import CrudRepo from "../utils/crud-repo";

export interface GenUserRole{
    id:number;
    gen_user_id: number;
    user_role_id: number;
    deleted_by: number;
}

export default new CrudRepo<GenUserRole>("gen_user_roles");