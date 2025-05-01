import db from "../../../../config/db";
import { ClinicVisits } from "../../../../models/clinic_visits";

export class Referal {
    static async PostRefer(student_id:Number, visits: ClinicVisits): Promise<any> {
        const [id] = await db("clinic_visits").insert({
            student_id: visits.student_id,
            visit_date: visits.visit_date,
            reason: visits.reason,
            treatment_given: visits.treatment_given,
            nurse_notes: visits.nurse_notes,
            referal_status: visits.referal_status,
            followup_status: visits.followup_status,
        });
    
        const inserted = await db("clinic_visits").where("id", id).first();
        return inserted;
    }

    static async getReferal(): Promise<any> {
        const data = await db("clinic_visits")
          .leftJoin('students', 'students.id', 'clinic_visits.student_id')
          .leftJoin('persons', 'persons.id', 'students.person_id')
          .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
          .select(
            "clinic_visits.*", 
            "persons.first_name", 
            'persons.middle_name', 
            'persons.last_name', 
            'suffix.suffix_name'
          )
          .where("clinic_visits.is_deleted", 0);
      return data; 
    }

    static async updateReferal(id: number, visits: ClinicVisits): Promise<any> {
        await db("clinic_visits").where("id", id).update({
            student_id: visits.student_id,
            visit_date: visits.visit_date,
            reason: visits.reason,
            treatment_given: visits.treatment_given,
            nurse_notes: visits.nurse_notes,
            referal_status: visits.referal_status,
            followup_status: visits.followup_status,
        });

        return await db("clinic_visits").where("id", id).first();
    }

    static async deleteReferal(id: number): Promise<any> {
        const deleted = await db("clinic_visits").where("id", id).del();
        return deleted;  // Returns the number of affected rows
    }

    static async findReferals(query: object): Promise<any> {
        return await db("clinic_visits").where(query);
    }
}
