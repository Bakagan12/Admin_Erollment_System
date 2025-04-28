import db from '../../../config/db';
// import { Student } from '../../../models/students';
// import { Persons } from '../../../models/persons';
// import { Mother } from '../../../models/mother';
// import { Father } from '../../../models/father';
// import { StudentGuardian } from '../../../models/studenGuardian';
// import { StudentEmergencyContact } from '../../../models/studentEmergencyContact';
// import { StudentMedicalHistory } from '../../../models/studentMedicalHistory';
// import { studentDocuments } from '../../../models/studentDocument';
// import { Term } from '../../../models/term';
// import { StudentStatus } from '../../../models/studentStatus';
// import { Status } from '../../../models/status';

export class OnlineApplyPending {
   static async pending_online_students(filters: { grade_level_id?: number, classification_id?: number }): Promise<any> {
      const query = db('students')
        .leftJoin('enrollment', 'enrollment.student_id', 'students.id')
        .leftJoin('persons', 'students.person_id', 'persons.id')
        .leftJoin('term', 'enrollment.term_id', 'term.id')
        .leftJoin('student_status', 'enrollment.student_status_id', 'student_status.id')
        .leftJoin('status', 'enrollment.status_id', 'status.id')
        .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
        .leftJoin('sections', 'sections.id', 'enrollment.section_id')
        .leftJoin('subjects', 'subjects.id', 'enrollment.subject_id')
        .where('enrollment.is_confirmed_registrar', 0)
        .where('enrollment.is_confirmed_cashier', 0)
        .where('enrollment.is_confirmed_principal', 0)
        .where('enrollment.is_deleted', 0);

      // 👇 Optional filters
      if (filters.grade_level_id) {
        query.where('enrollment.grade_level_id', filters.grade_level_id);
      }

      if (filters.classification_id) {
        query.where('grade_level.classification_id', filters.classification_id); 
      }

      const students = await query.select(
        'students.id as student_id',
        'students.student_no',
        'students.lrn_no',
        'grade_level.level_name',
        'sections.section_name',
        'subjects.subject_name',
        'enrollment.term_id',
        'enrollment.is_deleted',
        'persons.first_name',
        'persons.middle_name',
        'persons.last_name',
        'term.term_name',
        'student_status.student_status_name',
        'status.status_name as student_current_status'
      ).orderBy('students.id', 'desc');

      if (!students || students.length === 0) {
        throw new Error('No pending students found');
      }

      return {
        message: 'Pending students retrieved successfully',
        data: students
      };
  }
   static async online_student_enrolled(): Promise<any> {
      const students = await db('students')
        .leftJoin('persons', 'students.person_id', 'persons.id')
        // .leftJoin('student_guardian', 'students.student_guardian_id', 'student_guardian.id')
        // .leftJoin('student_emergency_contact', 'students.student_emergency_contact_id', 'student_emergency_contact.id')
        // .leftJoin('mother', 'students.mother_id', 'mother.id')
        // .leftJoin('father', 'students.father_id', 'father.id')
        // .leftJoin('student_medical_history', 'students.student_medical_history_id', 'student_medical_history.id')
        // .leftJoin('student_documents', 'students.student_document_id', 'student_documents.id')
        .leftJoin('grade_level', 'grade_level.id', 'enrollment.grade_level_id')
        .leftJoin('term', 'students.term_id', 'term.id')
        .leftJoin('student_status', 'students.student_status_id', 'student_status.id')
        .leftJoin('status', 'students.status_id', 'status.id')
        .leftJoin('sections', 'sections.id', 'enrollment.section_id')
        .leftJoin('subject', 'subject.id', 'enrollment.subject_id')
        // .where('enrollment.is_pending', 0)
        .where('enrollment.is_confirmed_registrar', 1)
        .where('enrollment.is_confirmed_cashier', 1)
        .where('enrollment.is_confirmed_principal', 1)
        .where('enrollment.is_deleted', 0)
        .select(
          'students.id as student_id',
          'students.student_no',
          'students.lrn_no',
          'grade_level.level_name',
          'sections.section_name',
          'subjects.subject_name',
          // 'enrollment.is_document_status',
          'enrollment.term_id',
          'enrollment.is_pending',
          'enrollment.is_deleted',
          'persons.first_name',
          'persons.middle_name',
          'persons.last_name',
          // 'student_guardian.first_name as guardian_first_name',
          // 'student_guardian.last_name as guardian_last_name',
          // 'student_emergency_contact.name as emergency_contact_name',
          // 'mother.first_name as mother_first_name',
          // 'father.first_name as father_first_name',
          'term.term_name',
          'student_status.student_status_name',
          'status.status_name as student_current_status'
        );

      return {
        message: 'Enrolled students retrieved successfully',
        data: students
    }
  }
}
