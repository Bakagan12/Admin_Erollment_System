import { OnlineApplyPending } from "../../../repository/departmental_usersRepository/registrar/online_apply_pendingRepo";

export class OnlineApplyPendingService {
  static async getPendingStudents(filters: { grade_level_id?: number, classification_id?: number }): Promise<any> {
    try {
      const data = await OnlineApplyPending.pending_online_students(filters);
      return data;
    } catch (error) {
      console.error('Service error:', error);
      throw new Error('Service failed to get pending students');
    }
  }

  static async getEnrolledStudents(): Promise<any> {
    try {
      const data = await OnlineApplyPending.online_student_enrolled();
      return data;
    } catch (error) {
      console.error('Service error:', error);
      throw new Error('Service failed to get enrolled students');
    }
  }
}
