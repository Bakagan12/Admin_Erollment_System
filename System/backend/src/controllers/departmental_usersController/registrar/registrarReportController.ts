import { Request, Response } from "express";
import { RegistrarReportService } from "../../../services/departmental_userService/registrar/reportService";

export class RegistrarReportController {
  static async getEnrolledStudents(req: Request, res: Response) {
    try {
      // Convert query params to number or null if not valid
      const term_id = req.query.term_id ? Number(req.query.term_id) : null;
      const grade_level_id = req.query.grade_level_id ? Number(req.query.grade_level_id) : null;
      const status_id = req.query.status_id ? Number(req.query.status_id) : null;

      // Validate if any of them are NaN, convert to null
      const term = Number(term_id) ? null : term_id;
      const grade = Number(grade_level_id) ? null : grade_level_id;
      const status = Number(status_id) ? null : status_id;

      const { message, data: students } = await RegistrarReportService.getEnrolledStudents(
        term,
        grade,
        status
      );

      res.status(200).json({ message, data: students });

    } catch (err) {
      console.error("Error in getEnrolledStudents:", err);
      res.status(500).json({ message: "Error retrieving students", error: err });
    }
  }
}
