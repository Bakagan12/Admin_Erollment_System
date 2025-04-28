import { EnrolledStudentRepo } from "../repository/enrolledStudents";

export class StudentEnrolledService {
  static async getOnlineEnrolledStudents() {
    return await EnrolledStudentRepo.online_student_enrolled();
  }
}
