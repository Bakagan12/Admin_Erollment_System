import CrudRepo from "../utils/crud-repo";

export interface ClinicInventory{
    id: number;
    item_name: string;
    quantity_available: string;
    unit:string;
    expiry_date: string;
    is_deleted: number;
}

export default new CrudRepo<ClinicInventory>("clinic_inventory");