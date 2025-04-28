import CrudRepo from "../utils/crud-repo";

export interface StudentDocument{
    id:number;
    first_name:string;
    middle_name:string;
    last_name:string;
    suffix_id:number;
    relationship: string;
    address:string;
    contact_no:string;
    email_address:string;
    occupation:string;
    occ_address:string;
}

export default new CrudRepo<StudentDocument>("student_document");