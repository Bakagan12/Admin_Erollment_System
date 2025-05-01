export class Payment{
    id?: number;
    person_id: number;
    school_fee_id:number;
    payment_method_id: number;
    amount: number;
    description: string;
    payment_date: Date;
    created_by: number;
    updated_by: number;
    is_deleted: number;
    constructor(
        id: number,
        person_id: number,
        school_fee_id: number,
        payment_method_id: number,
        amount: number,
        description: string,
        payment_date: Date,
        created_by: number,
        updated_by: number,
        is_deleted: number
    ){
        this.id = id;
        this.person_id = person_id;
        this.school_fee_id = school_fee_id;
        this.payment_method_id = payment_method_id;
        this.amount = amount;
        this.description = description;
        this.payment_date = payment_date;
        this.created_by = created_by;
        this.updated_by = updated_by;
        this.is_deleted = is_deleted;
    }
}