import { Response, Request } from "express";
import { RegistrarReportService } from "../departmental_userService/registrar/reportService";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import ExcelJS from "exceljs";

export class ExportRegistrarReportService {
   static async exportToPDF(req: Request, res: Response) {
    const response = await RegistrarReportService.getEnrolledStudents();
    const data = response.data || [];

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let y = 750;
    page.drawText("Enrolled Students", { x: 50, y, size: 16, font, color: rgb(0, 0, 0) });
    y -= 30;
  
    data.slice(0, 20).forEach((student: any, index: number) => {
      page.drawText(`${index + 1}. ${student.first_name} ${student.last_name}`, {
        x: 50,
        y: y - index * 20,
        size: 12,
        font,
        color: rgb(0, 0, 0)
      });
    });

    const pdfBytes = await pdfDoc.save();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=enrolled_students.pdf");
    res.status(200).send(pdfBytes);
  }


  static async exportToExcel(req: Request, res: Response) {
    const response = await RegistrarReportService.getEnrolledStudents();
    const data = response.data || [];
  
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Enrolled Students");
  
    sheet.columns = [
      { header: "Student No", key: "student_no" },
      { header: "First Name", key: "first_name" },
      { header: "Last Name", key: "last_name" },
      { header: "Term", key: "term_name" },
      { header: "Grade Level ID", key: "grade_level_id" },
      { header: "Status", key: "student_current_status" },
    ];
  
    data.forEach((student: any) => {
      sheet.addRow({
        student_no: student.student_no,
        first_name: student.first_name,
        last_name: student.last_name,
        term_name: student.term_name,
        grade_level_id: student.grade_level_id,
        student_current_status: student.student_current_status,
      });
    });
  
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=enrolled_students.xlsx");
  
    await workbook.xlsx.write(res);
    res.end();
  }
  
}
