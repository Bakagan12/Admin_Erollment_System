import db from "../../../config/db";

export class ConfirmedRegistrar{
 static async student_registrar_confirmed(): Promise<any> {
    try {
      const students = await db('students')
        .leftJoin('persons', 'students.person_id', 'persons.id')
        .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
        .leftJoin('student_emergency_contact', 'students.student_emergency_contact_id', 'student_emergency_contact.id')
        .leftJoin('mother', 'students.mother_id', 'mother.id')
        .leftJoin('father', 'students.father_id', 'father.id')
        .leftJoin('student_medical_history', 'students.student_medical_history_id', 'student_medical_history.id')
        .leftJoin('student_documents', 'students.student_document_id', 'student_documents.id')
        .leftJoin('term', 'students.term_id', 'term.id')
        .leftJoin('student_status', 'students.student_status_id', 'student_status.id')
        .leftJoin('status', 'students.status_id', 'status.id')
        .where('students.is_pending', 1)
        .where('students.is_confirmed_registrar', 1)
        .where('students.is_confirmed_cashier', 0)
        .where('students.is_confirmed_principal', 0)
        .where('students.is_deleted', 0)
        .select(
          'students.id as student_id',
          'students.student_no',
          'students.lrn_no',
          'students.grade_level_id',
          'students.section_id',
          'students.subject_id',
          'students.is_document_status',
          'students.term_id',
          'students.is_pending',
          'students.is_deleted',
          'persons.first_name',
          'persons.middle_name',
          'persons.last_name',
          'student_guardian.first_name as guardian_first_name',
          'student_guardian.last_name as guardian_last_name',
          'student_emergency_contact.name as emergency_contact_name',
          'mother.first_name as mother_first_name',
          'father.first_name as father_first_name',
          'term.term_name',
          'student_status.student_status_name',
          'status.status_name as student_current_status'
        );

      return {
        message: 'Confirmed students on registrar retrieved successfully',
        data: students
      };
    } catch (error) {
      console.error('Error retrieving Confirmed students on registrar students:', error);
      throw new Error('Failed to retrieve Confirmed students on registrar students');
    }
  }

}