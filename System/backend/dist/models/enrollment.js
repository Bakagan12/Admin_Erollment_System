"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
class Enrollment {
    constructor(id, student_id, course_id, semester_level_id, grade_level_id, subject_id, section_id, term_id, status_id, is_confirmed_registrar, is_confirmed_cashier, is_confirmed_principal, is_deleted, is_deleted_by, is_deleted_at, updated_by) {
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
exports.Enrollment = Enrollment;
