export class Enrollment{
        id?: number;
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
        constructor(
            id:number,
            student_id:string,
            course_id: number,
            semester_level_id: number,
            grade_level_id:number,
            subject_id: number,
            section_id:number,
            term_id:number,
            status_id:number,
            is_confirmed_registrar: number,
            is_confirmed_cashier: number,
            is_confirmed_principal: number,
            is_deleted:number,
            is_deleted_by:number,
            is_deleted_at:Date,
            updated_by:number
        ){
            this.id = id;
            this.student_id = student_id;
            this.course_id = course_id;
            this.semester_level_id = semester_level_id;
            this.grade_level_id = grade_level_id;
            this.section_id = section_id;
            this.subject_id = subject_id;
            this.term_id = term_id;
            this.status_id = status_id;
            this.is_confirmed_cashier = is_confirmed_cashier; 
            this.is_confirmed_principal = is_confirmed_principal;
            this.is_confirmed_registrar = is_confirmed_registrar;
            this.is_deleted = is_deleted;
            this.is_deleted_by = is_deleted_by;
            this.is_deleted_at = is_deleted_at;
            this.updated_by = updated_by;
        }
}