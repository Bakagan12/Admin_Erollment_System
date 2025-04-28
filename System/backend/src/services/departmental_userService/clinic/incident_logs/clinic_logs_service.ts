import { ClinicLogs } from "../../../../models/clinic_logs";
import { ClinicLogsRepository } from "../../../../repository/departmental_usersRepository/clinic/clinic-logs/clinic_logs";

export class ClinicLogsService {
  static async create( student_id:Number, log: ClinicLogs): Promise<ClinicLogs | null> {
    return await ClinicLogsRepository.create(student_id, log);
  }

  static async getAll(): Promise<ClinicLogs[]> {
    return await ClinicLogsRepository.getAll();
  }

  static async find(criteria: Partial<ClinicLogs>): Promise<ClinicLogs[]> {
    return await ClinicLogsRepository.find(criteria);
  }

  static async update(id: number, log: Partial<ClinicLogs>): Promise<ClinicLogs | null> {
    return await ClinicLogsRepository.update(id, log);
  }

  static async delete(id: number): Promise<boolean> {
    return await ClinicLogsRepository.delete(id);
  }
}
