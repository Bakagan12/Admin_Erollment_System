import CrudRepo from "../utils/crud-repo";

export interface ClinicCondition{
    id: number;
    student_id: number;
    condition_name: string;
    description: string;  
    is_deleted: number;
}

export default new CrudRepo<ClinicCondition>("clinic_conditions");