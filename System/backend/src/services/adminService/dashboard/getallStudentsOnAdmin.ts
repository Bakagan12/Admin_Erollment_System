import { getAllStudentUser } from "../../../repository/adminRepository/dashboard/getAllStudent";

export class getallStudentsOnAdmin {
    static async getAllStudents() {
        return await getAllStudentUser.getAllStudents();
    }
    static async getAllTeachers() {
        return await getAllStudentUser.getAllTeachers();
    }
    static async getEnrolledStudents() {
        return await getAllStudentUser.getEnrolledStudents();
    }
}
