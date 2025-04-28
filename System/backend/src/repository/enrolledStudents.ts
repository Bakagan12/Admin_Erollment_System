import db = require("../config/db");

export class EnrolledStudentRepo {
  static async online_student_enrolled(): Promise<any> {
    try {
      const students = await db('students')
        .leftJoin('enrollment', 'enrollment.student_id', 'students.id')
        .leftJoin('persons', 'students.person_id', 'persons.id')
        .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
        .leftJoin('student_emergency_contact', 'students.student_emergency_contact_id', 'student_emergency_contact.id')
        .leftJoin('mother', 'students.mother_id', 'mother.id')
        .leftJoin('father', 'students.father_id', 'father.id')
        .leftJoin('student_medical_history', 'students.student_medical_history_id', 'student_medical_history.id')
        .leftJoin('student_documents', 'students.student_document_id', 'student_documents.id')
        .leftJoin('term', 'students.term_id', 'term.id')
        .leftJoin('student_status', 'enrollment.student_status_id', 'student_status.id')
        .leftJoin('status', 'enrollment.status_id', 'status.id')
        .where('enrollment.is_confirmed_registrar', 1)
        .where('enrollment.is_confirmed_cashier', 1)
        .where('enrollment.is_confirmed_guidance', 1)
        .where('enrollment.is_enrolled', 1)
        .where('enrollment.is_deleted', 0)
        .select(
          'students.id as student_id',
          'students.student_no',
          'students.lrn_no',
          'enrollment.section_id',
          'enrollment.subject_id',
          'enrollment.term_id',
          'enrollment.is_deleted',
          'persons.first_name',
          'persons.middle_name',
          'persons.last_name',
          'student_guardian.first_name as guardian_first_name',
          'student_guardian.last_name as guardian_last_name',
          'student_emergency_contact.name as emergency_contact_name',
          'mother.first_name as mother_first_name',
          'mother.last_name as mother_last_name',
          'father.first_name as father_first_name',
          'father.last_name as father_last_name',
          'term.term_name',
          'student_status.student_status_name',
          'status.status_name as student_current_status'
        );

      return {
        message: 'Enrolled students retrieved successfully',
        data: students
      };
    } catch (error) {
      console.error('Error retrieving Enrolled students:', error);
      throw new Error('Failed to retrieve Enrolled students');
    }
  }
}
