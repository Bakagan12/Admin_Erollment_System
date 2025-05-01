import CrudRepo from "../utils/crud-repo";

export interface Payment{

    id:number;
    person_id: number;
    school_fee_id:number;
    payment_method_id: number;
    amount: number;
    description: string;
    payment_date: Date;
    created_by: number;
    updated_by: number;
    is_deleted: number;
}

export default new CrudRepo<Payment>("payment");