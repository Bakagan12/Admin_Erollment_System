import CrudRepo from "../utils/crud-repo";

export interface PaymentMethod{

    id:number;
    method_name:string;
}

export default new CrudRepo<PaymentMethod>("payment_method");