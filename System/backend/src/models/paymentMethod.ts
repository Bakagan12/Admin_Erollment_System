import db from "../config/db";

export class PaymentMethod{
    id?:number;
    method_name:string;
    constructor(
        id:number,
        method_name:string
    ){
        this.id = id;
        this.method_name = method_name;
    }

     static async getAll(): Promise<PaymentMethod[]> {
        const results = await db('payment_method').select('*');
        return results.map(row => new PaymentMethod(row.id, row.method_name));
    }
}