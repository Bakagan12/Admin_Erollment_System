import { reportsRepo } from '../../repository/adminRepository/reports/reportsRepo';
import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import { Response } from 'express';


export class ReportsService {
  async fetchReportData(termId: number | null, roleId: number | null, statusId: number | null) {
    return await reportsRepo.getReports(termId, roleId, statusId);
  }

  async exportToPDF(res: Response, termId: number | null, roleId: number | null, statusId: number | null) {
    const data = await this.fetchReportData(termId, roleId, statusId);

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
    doc.pipe(res);

    doc.fontSize(18).text('Student Report', { align: 'center' }).moveDown();

    data.forEach((item: any, index: number) => {
      doc
        .fontSize(12)
        .text(`${index + 1}. ${item.first_name} ${item.last_name} - ${item.role_name} - ${item.term_name}`);
    });

    doc.end();
  }

  async exportToExcel(res: Response, termId: number | null, roleId: number | null, statusId: number | null) {
    const data = await this.fetchReportData(termId, roleId, statusId);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Student Report');

    worksheet.columns = [
      { header: 'First Name', key: 'first_name', width: 20 },
      { header: 'Last Name', key: 'last_name', width: 20 },
      { header: 'Role', key: 'role_name', width: 20 },
      { header: 'Term', key: 'term_name', width: 20 },
    ];

    worksheet.addRows(data);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="report.xlsx"');

    await workbook.xlsx.write(res);
    res.end();
  }
}
