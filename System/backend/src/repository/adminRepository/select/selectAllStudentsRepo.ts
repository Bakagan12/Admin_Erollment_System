import  db from "../../../config/db";


export class selectAllStudents{
    static async getAllStudents(){
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
}