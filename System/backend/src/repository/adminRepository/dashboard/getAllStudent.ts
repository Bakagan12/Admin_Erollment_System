
import db from "../../../config/db";
import { Persons } from "../../../models/persons";
export class getAllStudentUser{
    static async getAllStudents(){
        return db('students')
        .leftJoin('persons', 'persons.id', 'students.person_id')
        .leftJoin('mother', 'mother.id', 'students.mother_id')
        .leftJoin('father', 'father.id', 'students.father_id')
        .leftJoin('student_guardian', 'student_guardian.id', 'students.student_guardian_id')
        .leftJoin('student_emergency_contact', 'student_emergency_contact.id', 'students.student_emergency_contact_id')
        .leftJoin('student_medical_history', 'student_medical_history.id', 'students.student_medical_history_id')
        .leftJoin('student_documents', 'student_documents.id', 'students.student_document_id')
        // .leftJoin('student_status', 'student_status.id', 'students.student_status_id')
        .where('students.is_deleted', 0)
        // .where('students.is_enrolled', 1)
        .where('students.status_id', 1)
        .select(
            'persons.*',
        );
    }
    static async getEnrolledStudents(){
        return db('enrollment')
            .leftJoin('students', 'students.id', 'enrollment.student_id')
            .leftJoin('persons', 'persons.id', 'students.person_id')
            .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
            .where('students.status_id', 1)
            .where('students.is_deleted', 0)
            .where('enrollment.is_confirmed_cashier', 1)
            .where('enrollment.is_confirmed_guidance', 1)
            .where('enrollment.is_confirmed_registrar', 1)
            .where('enrollment.is_enrolled', 1)
            .select('persons.*','students.*', 'grade_level.*')
    }

    static async getAllTeachers(){
        return db('gen_users')
            .leftJoin('persons', 'persons.id', 'gen_users.person_id')
            .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
            .leftJoin('gen_user_roles', 'gen_user_roles.gen_user_id', 'gen_users.id')
            .where('gen_user_roles.user_role_id', 14)
            .select(
                'persons.*',
                'suffix.suffix_name'
            )
    }

}