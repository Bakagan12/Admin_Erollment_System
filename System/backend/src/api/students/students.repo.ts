import CrudRepo from "../utils/crud-repo";

export interface Student{
    id:number;
    person_id: number;
    student_guardian_id: number;
    student_emergency_contact_id: number;
    student_medical_history_id:number;
    student_document_id: number;
    student_no:string;
    lrn_no:number;
    student_status_id:number;
    grade_level_id: number;
    section_id:number;
    subject_id:number;
    is_document_status:number;
    term_id: number;
    is_deleted:number;
    is_enrolled: number;
    is_pending: number;
    is_confirmed_cashier: number;
    is_confirmed_registrar: number;
    is_confirmed_principal: number;
    created_by:number;
    updated_by:number;
}

export default new CrudRepo<Student>("students");