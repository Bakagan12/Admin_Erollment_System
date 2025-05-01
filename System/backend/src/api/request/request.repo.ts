import CrudRepo from "../utils/crud-repo";

export interface Request{
    id:number;
    gen_user_id: number;
    user_role_id: number;
    request_to: string;
    request_name: string;
    description: string;
    quantity: string;
    unit: string;
    restock_needed: string;
    is_deleted: number;
}

export default new CrudRepo<Request>("request");