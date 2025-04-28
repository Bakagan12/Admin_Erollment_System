import CrudRepo from "../utils/crud-repo";

export interface ClinicMedicationGiven{
    id: number;
    visit_id: number;
    inventory_item_id: number;
    quality_given:string;
   
}

export default new CrudRepo<ClinicMedicationGiven>("clinic_medications_given");