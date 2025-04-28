import db from '../../config/db';
import { Father } from '../../models/father';
import { GenUser } from '../../models/genUser';
import { Mother } from '../../models/mother';
import { Persons } from '../../models/persons';
import { StudentEmergencyContact } from '../../models/studentEmergencyContact';
import { StudentGuardian } from '../../models/studenGuardian';
import { Student } from '../../models/students';

import { v4 as uuidv4 } from 'uuid';


export class online_registration {
  static async onlineRegister(
    user: GenUser,
    person: Persons,
    guardian: StudentGuardian,
    emergency: StudentEmergencyContact,
    student: Student,
    mother: Mother,
    father: Father,
  ): Promise<any> {
    return await db.transaction(async (trx) => {
      // Insert into persons table
      const [personId] = await trx('persons').insert({
        first_name: person.first_name,
        middle_name: person.middle_name,
        last_name: person.last_name,
        suffix_id: person.suffix_id,
        age: person.age,
        address: person.address,
        place_of_birth: person.place_of_birth,
        date_of_birth: person.date_of_birth,
        contact_no: person.contact_no,
        email: person.email
      });

      // Insert into mothers table
      const [motherId] = await trx('mother').insert({
        first_name: mother.first_name,
        middle_name: mother.middle_name,
        last_name: mother.last_name,
        address: mother.address,
        contact_no: mother.contact_no,
        occupation: mother.occupation
      });

      // Insert into fathers table
      const [fatherId] = await trx('father').insert({
        first_name: father.first_name,
        middle_name: father.middle_name,
        last_name: father.last_name,
        address: father.address,
        contact_no: father.contact_no,
        occupation: father.occupation
      });

      // Insert into student_guardian table
      const [guardianId] = await trx('student_guardian').insert({
        first_name: guardian.first_name,
        middle_name: guardian.middle_name,
        last_name: guardian.last_name,
        suffix_id: guardian.suffix_id,
        address: guardian.address,
        contact_no: guardian.contact_no,
        email_address: guardian.email_address,
        occupation: guardian.occupation,
        relationship: guardian.relationship
      });

      // Insert into student_emergency_contact
      const [emergencyId] = await trx('student_emergency_contact').insert({
        name: emergency.name,
        address: emergency.address,
        contact_no: emergency.contact_no,
        relationship: emergency.relationship
      });

      // Insert into students table
      const [studentId] = await trx('students').insert({
        person_id: personId,
        student_guardian_id: guardianId,
        mother_id: motherId,
        father_id: fatherId,
        student_emergency_contact_id: emergencyId,
        lrn_no: student.lrn_no,
        term_id:student.term_id,
        student_no: student.student_no,
        is_deleted: 0,
        status_id: 1
      });
     const [term] = await trx('term').where('is_current', 1).select('*');
     const termId = term.id; 

      const [enrollmentId] = await trx('enrollment').insert({
        student_id: studentId,
        grade_level_id: student.grade_level_id,
        subject_id: student.subject_id,
        student_status_id: student.student_status_id,
        term_id:termId,
        section_id: student.section_id,
        is_deleted: 0,
        is_confirmed_registrar:0,
        is_confirmed_cashier:0,
        is_confirmed_guidance:0,
        status_id: 1
      });

      const insertedPerson = await trx('persons').where('id', personId).first();

      // Insert into gen_users to create a new student credentials to login
      const [userId] = await trx('gen_users').insert({
        person_id: personId,
        guardian_id: guardianId,
        gen_user_email:insertedPerson.email,
        username: user.username,
        password: user.password,
        is_deleted: 0,
        user_role_id: 12,
        status_id: 1,
        is_emailed: 0,
        is_deleted_by: 0
      });
      const [GuardianCountId] = await db('gen_users')
                        .where('user_role_id', 13)
                        .count('id as total');
       // Generate guardian's username based on first_name and last_name
      const guardianUsername = `${guardian.first_name.toLowerCase()}${guardian.last_name.toLowerCase()}${(Number(GuardianCountId.total) || 0) + 1}`;
      const guardianEmail = guardian.email_address;

      const [guardianUserId] = await trx('gen_users').insert({
        person_id:null ,
        guardian_id: guardianId,
        gen_user_email: guardianEmail,
        username: guardianUsername,
        password: user.password,
        is_deleted: 0,
        user_role_id: 13,
        status_id: 1,
        is_emailed: 0,
        is_deleted_by: 0
      });
      const [genUserRolesId] = await trx('gen_user_roles').insert({
        gen_user_id: userId,
        user_role_id: 12,
        deleted_by: 0
      });
      const [guardianUserRolesId] = await trx('gen_user_roles').insert({
        gen_user_id: guardianUserId,
        user_role_id: 13,
        deleted_by: 0
      });

      return {
        message: 'Registration successful',
        data: {
          personId,
          studentId,
          userId
        }
      };
    });
  }
   static async getLastGeneratedUsername() {
    return db('gen_users')
      .where('user_role_id', 12)
      .andWhere('username', 'like', 'SCLC-%')
      .orderBy('id', 'desc')
      .first('username');
  }

  // Method to get student count
  static async getStudentCount() {
    return db('gen_users')
      .where('user_role_id', 12)
      .count('id as total')
      .first();
  }
   static async getLastGeneratedGuardianUsername() {
    return db('gen_users')
      .where('user_role_id', 13)
      .orderBy('id', 'desc')
      .first('username');
  }
   static async getGuardianCount() {
    return db('gen_users')
      .where('user_role_id', 13)
      .count('id as total')
      .first();
  }
}
