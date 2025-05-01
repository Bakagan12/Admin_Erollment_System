import CrudRepo from "../utils/crud-repo";

export interface ClinicLogs{
    id: number;
    item_name: string;
    quantity_available: string;
    unit:string;
    expiry_date: string;
    is_deleted: number;
}

export default new CrudRepo<ClinicLogs>("clinic_logs");