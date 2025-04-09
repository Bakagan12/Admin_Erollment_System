import db from "../../../config/db";
import { Student } from "../../../models/students";
import { Persons } from "../../../models/persons";

export class selectAllStudents {

    // Get all active students
    static async getAllStudents() {
        return db('gen_users')
        .leftJoin('status', 'gen_users.status_id', 'status.id')
        .leftJoin('user_roles', 'gen_users.user_role_id', 'user_roles.id')
        .leftJoin('persons', 'gen_users.person_id', 'persons.id')
        .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
        .where('user_roles.is_active', '=', 1)
        .where('user_role_id', '=', 12)
        .where('gen_users.is_deleted', '=', 0)
        .where(function() {
            this.where('gen_users.is_deleted', '=', 0)
                .orWhereNull('gen_users.is_deleted');
        })
        .select(
            'gen_users.id as user_id',
            'gen_users.username',
            'gen_users.password',
            'persons.first_name',
            'persons.middle_name',
            'persons.last_name',
            'gen_users.gen_user_email',
            'user_roles.role_name',
            'status.status_name',
            'gen_users.created_at',
            'gen_users.is_deleted_by',
            'status.status_name'
        );
    }

    // Create a new student
    static async createStudent(person: Persons, student: Student) {
        try {
            // Insert into 'persons' table first
            const [personId] = await db('persons').insert(person).returning('id');

            // Then insert into 'students' table
            const [studentId] = await db('students').insert({
                person_id: personId,
                mother_id: student.mother_id,
                father_id: student.father_id,
                student_guardian_id: student.student_guardian_id,
                status_id: student.status_id
            })
            ;

            return studentId;
        } catch (error: any) {
            throw new Error('Error creating student: ' + error.message);
        }
    }

    // Update an existing student
    static async updateStudent(studentId: number, person: Persons, student: Student) {
        try {
            // Update 'persons' table
            await db('persons').where('id', student.person_id).update(person);

            // Update 'students' table
            await db('students').where('id', studentId).update({
                mother_id: student.mother_id,
                father_id: student.father_id,
                student_guardian_id: student.student_guardian_id,
                status_id: student.status_id
            });

            return studentId;
        } catch (error: any) {
            throw new Error('Error updating student: ' + error.message);
        }
    }

    // Delete a student (soft delete by changing status_id)
    static async deleteStudent(studentId: number) {
        try {
            await db('students').where('id', studentId).update({
                status_id: 0
            });
            return studentId;
        } catch (error: any) {
            throw new Error('Error deleting student: ' + error.message);
        }
    }
}
