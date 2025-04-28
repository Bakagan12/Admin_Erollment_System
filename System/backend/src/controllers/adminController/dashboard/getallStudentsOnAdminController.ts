import { Request, Response } from "express";
import { getallStudentsOnAdmin } from "../../../services/adminService/dashboard/getallStudentsOnAdmin";

export class StudentAdminController {
    static async getAllStudents(req: Request, res: Response) {
        try {
            const students = await getallStudentsOnAdmin.getAllStudents();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch students", error });
        }
    }

    static async getAllTeachers(req: Request, res: Response) {
        try {
            const teachers = await getallStudentsOnAdmin.getAllTeachers();
            res.status(200).json(teachers);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch teachers", error });
        }
    }

    static async getEnrolledStudents(req: Request, res: Response) {
        try {
            const enrolled = await getallStudentsOnAdmin.getEnrolledStudents();
            res.status(200).json(enrolled);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch enrolled students", error });
        }
    }
}
