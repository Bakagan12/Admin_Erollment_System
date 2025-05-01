import { RegistrarReport } from "../../../repository/departmental_usersRepository/registrar/reports";

export class RegistrarReportService {
  static async getEnrolledStudents(term_id?: number | null, grade_level_id?: number | null, status_id?: number | null) {
    return await RegistrarReport.online_student_enrolled(term_id, grade_level_id, status_id);
  }
}