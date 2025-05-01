import db from "../../../../config/db";
import { ClinicLogs } from "../../../../models/clinic_logs";

export class ClinicLogsRepository {
  static async create(student_id:Number, log: Omit<ClinicLogs, "id">): Promise<ClinicLogs | null> {
    try {
      const [id]: any = await db("clinic_logs").insert({
        student_id: log.student_id,
        activity_type: log.activity_type,
        incident_description: log.incident_description,
        treatment: log.treatment,
        incident_status: log.incident_status,
        is_deleted: log.is_deleted,
      });

      const inserted = await db("clinic_logs").where({ id }).first();
      return inserted || null;
    } catch (error) {
      console.error("ClinicLogsRepository.create error:", error);
      return null;
    }
  }

  static async getAll(): Promise<ClinicLogs[]> {
    const data = await db("clinic_logs")
          .leftJoin('students', 'students.id', 'clinic_logs.student_id')
          .leftJoin('persons', 'persons.id', 'students.person_id')
          .leftJoin('suffix', 'suffix.id', 'persons.suffix_id')
          .select(
            "clinic_logs.*", 
            "persons.first_name", 
            'persons.middle_name', 
            'persons.last_name', 
            'suffix.suffix_name'
          )
          .where("clinic_logs.is_deleted", 0);
      return data; 
    }

  static async update(id: number, log: Partial<ClinicLogs>): Promise<ClinicLogs | null> {
    try {
      await db("clinic_logs").where({ id }).update(log);
      return await db("clinic_logs").where({ id }).first();
    } catch (error) {
      console.error("ClinicLogsRepository.update error:", error);
      return null;
    }
  }

  static async delete(id: number): Promise<boolean> {
    try {
      const deletedCount = await db("clinic_logs").where({ id }).update({ is_deleted: true });
      return deletedCount > 0;
    } catch (error) {
      console.error("ClinicLogsRepository.delete error:", error);
      return false;
    }
  }
  static async find(criteria: Partial<ClinicLogs>): Promise<ClinicLogs[]> {
    try {
      return await db("clinic_logs").where({ ...criteria, is_deleted: false });
    } catch (error) {
      console.error("ClinicLogsRepository.find error:", error);
      return [];
    }
  }
}