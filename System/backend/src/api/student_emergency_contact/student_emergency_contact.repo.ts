import CrudRepo from "../utils/crud-repo";

export interface StudentEmergencyContact{
    id:number;
    name: string;
    suffix_id: number;
    address: string;
    contact_no: string;
    email_address: string;
    relationship: string;
}

export default new CrudRepo<StudentEmergencyContact>("student_emergency_contact");