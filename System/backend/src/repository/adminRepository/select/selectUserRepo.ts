import  db from "../../../config/db";
import { v4 as uuidv4 } from 'uuid';

export class selectUsers{
    static async getAllStudents(){
        return db('students').leftJoin('persons', 'students.person_id', 'persons.id')
                            .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                            .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                            .select(
                                'gen_users.username',
                                'gen_users.gen_user_email',
                                'gen_users.password',
                                'persons.first_name',
                                'persons.middle_name',
                                'persons.last_name',
                                'suffix.suffix_name'
                            ).where('gen_users.user_role_id', '=', 12);
    }
    static async getAllTeachers(){
        return db('gen_users').leftJoin('persons', 'gen_users.person_id', 'persons.id')
                            .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                            .select(
                                'gen_users.username',
                                'gen_users.gen_user_email',
                                'gen_users.password',
                                'persons.first_name',
                                'persons.middle_name',
                                'persons.last_name',
                                'suffix.suffix_name'
                            ).where('gen_users.user_role_id', '=', 13);
    }
    static async getAllStudentsfromRegistrar(){
        return db('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select(
                    'enrollment.id as enrollment_id',
                    'enrollment.*',
                    'persons.*',
                    'students.*',
                    'gen_users.username',
                    'gen_users.gen_user_email',
                    'gen_users.password',
                    'suffix.suffix_name',
                    'grade_level.level_name',
                    'sections.section_name'
                ).where('gen_users.user_role_id', '=', 12)
                // .where('enrollment.is_confirmed_guidance', 0)
                // .where('enrollment.is_confirmed_registrar', 0)
                .where('enrollment.is_enrolled', 0);
    }
    static async getAllStudentsfromCashier(){
        return db('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select(
                   'enrollment.id as enrollment_id',
                    'persons.*',
                    'students.*',
                    'gen_users.username',
                    'gen_users.gen_user_email',
                    'gen_users.password',
                    'suffix.suffix_name',
                    'grade_level.level_name',
                    'sections.section_name'
                ).where('gen_users.user_role_id', '=', 12)
                .where('enrollment.is_confirmed_cashier', 0);
    }
    static async getAllStudentsfromGuidance(){
        return db('enrollment')
                .leftJoin('students', 'students.id', 'enrollment.student_id')
                .leftJoin('persons', 'students.person_id', 'persons.id')
                .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                .leftJoin('term', 'term.id', 'enrollment.term_id')
                .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
                .leftJoin('sections', 'sections.id', 'enrollment.section_id')
                .select(
                    'enrollment.id as enrollment_id',
                    'enrollment.is_enrolled',
                    'enrollment.is_passed',
                    'persons.*',
                    'students.*',
                    'gen_users.username',
                    'gen_users.gen_user_email',
                    'gen_users.password',
                    'suffix.suffix_name',
                    'grade_level.level_name',
                    'sections.section_name'
                ).where('gen_users.user_role_id', '=', 12)
                .where('enrollment.is_confirmed_cashier', 1)
                .where('enrollment.is_confirmed_registrar', 0)
                .where('enrollment.is_confirmed_guidance', 0);
    }
     static async PassStudentsFromGuidanceRepo(enrollment_id: number){
        return db('enrollment')
                .where({id: enrollment_id})
                .update({is_passed: 1});
    }
    static async StudentsApprovefromCashierRepo(enrollment_id: number){
        return db('enrollment')
                .where({id: enrollment_id})
                .update({is_confirmed_cashier: 1});
    }
    static async StudentsApprovefromGuidanceRepo(enrollment_id: number){
        return db('enrollment')
                .where({id: enrollment_id})
                .update({is_confirmed_guidance: 1});
    }
    static async StudentsApprovefromRegistrarRepo(enrollment_id: number){
        return db('enrollment')
                .where({id: enrollment_id})
                .update({is_confirmed_registrar: 1});
    }
    static async StudentsApprovefromRegistrarEnrolledRepo(enrollment_id: number){
        return db('enrollment')
                .where({id: enrollment_id})
                .update({is_enrolled: 1});
    }
}