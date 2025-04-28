export class ClinicInventory{
    id?: number;
    item_name: string;
    quantity_available: string;
    unit:string;
    expiry_date: string;
    is_deleted: number;

    constructor (
    id: number,
    item_name: string,
    quantity_available: string,
    unit:string,
    expiry_date: string,
    is_deleted: number,
    ){
    this.id = id;
    this.item_name = item_name;
    this.quantity_available = quantity_available;
    this.unit = unit;
    this.expiry_date = expiry_date;
    this.is_deleted = is_deleted;

    }
}