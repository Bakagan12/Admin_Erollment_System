import db from "../../../config/db";
import { Student } from "../../../models/students";
import { Persons } from "../../../models/persons";

export class selectAllStudents {

    // Get all active students
    static async getAllStudents() {
        return db('students').leftJoin('persons', 'students.person_id', 'persons.id')
            .leftJoin('mother', 'students.mother_id', 'mother.id')
            .leftJoin('father', 'students.father_id', 'father.id')
            .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
            .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
            .where('students.status_id', 1)
            .select(
                'students.id as student_id',
                'persons.first_name',
                'persons.middle_name',
                'persons.last_name',
                'persons.email',
                'persons.contact_no'
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
