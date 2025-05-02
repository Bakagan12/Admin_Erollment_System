"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, person_id, school_fee_id, payment_method_id, amount, description, payment_date, created_by, updated_by, is_deleted) {
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
exports.Payment = Payment;
