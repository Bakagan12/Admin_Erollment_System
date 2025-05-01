export class Request{
    id?: number;
    gen_user_id: number;
    user_role_id: number;
    request_to: string;
    request_name: string;
    description: string;
    quantity: string;
    unit: string;
    restock_needed: string;
    is_deleted: number;

    constructor (
        id: number,
        gen_user_id: number,
        user_role_id: number,
        request_to: string,
        request_name: string,
        description: string,
        quantity: string,
        unit: string,
        restock_needed: string,
        is_deleted: number,
    ){
        this.id = id;
        this.gen_user_id = gen_user_id;
        this.user_role_id = user_role_id;
        this.request_to = request_to;
        this.request_name = request_name;
        this.description = description;
        this.quantity = quantity;
        this.unit = unit;
        this.restock_needed = restock_needed;
        this.is_deleted = is_deleted;
    }
}