import CrudRepo from "../utils/crud-repo";

export interface EnrollmentStatus{
    id: number;
    student_id: string;
    course_id: number;
    semester_level_id:number;
    grade_level_id:number;
    section_id: number;
    subject_id: number;
    term_id:number;
    status_id: number;
    is_confirmed_cashier: number;
    is_confirmed_registrar: number;
    is_confirmed_principal: number;
    is_deleted:number;
    is_deleted_by:number;
    is_deleted_at:Date;
    updated_by:number;
}

export default new CrudRepo<EnrollmentStatus>("enrollment_status");