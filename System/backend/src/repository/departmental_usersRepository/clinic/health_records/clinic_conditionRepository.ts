// repository/departmental_usersRepository/clinic/health_record/clinicConditioningRepository.ts

import db from "../../../../config/db";
import { ClinicConditions } from "../../../../models/clinic_conditions";

export class ClinicConditioning {
    static async PostCondition(student_id:Number, con: ClinicConditions): Promise<any> {
        const [id] = await db("clinic_conditions").insert({
            student_id: student_id,
            condition_name: con.condition_name,
            description: con.description,
            is_deleted: con.is_deleted,
        });
        const inserted = await db("clinic_conditions").where("id", id).first();
        return inserted;
    }
    static async getConditions(): Promise<any> {
      const data = await db("clinic_conditions")
          .leftJoin('students', 'students.id', 'clinic_conditions.student_id')
          .leftJoin('persons', 'persons.id', 'students.person_id')
          .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
          .select(
            "clinic_conditions.*", 
            "persons.first_name", 
            'persons.middle_name', 
            'persons.last_name', 
            'suffix.suffix_name'
          )
          .where("clinic_conditions.is_deleted", 0);
  
      return data; // this should be an array
  }
  
    static async updateCondition(id: number, con: ClinicConditions): Promise<any> {
        await db("clinic_conditions").where("id", id).update({
            student_id: con.student_id,
            condition_name: con.condition_name,
            description: con.description,
            is_deleted: con.is_deleted,
        });

        return await db("clinic_conditions").where("id", id).first();
    }

    static async deleteCondition(id: number): Promise<any> {
        await db("clinic_conditions").where("id", id).update({ is_deleted: 1 });
        return { message: "Condition deleted successfully" };
    }

    static async findCondition(query: object): Promise<any> {
        return await db("clinic_conditions").where(query).where("is_deleted", 0);
    }
}
