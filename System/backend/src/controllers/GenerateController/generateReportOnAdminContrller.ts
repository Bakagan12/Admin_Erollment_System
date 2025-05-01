import { Request, Response } from 'express';
import { ReportsService } from '../../services/GenerateService/generateReportOnAdminService';

const service = new ReportsService();

export class ReportsController {
//   async getFilteredReport(req: Request, res: Response) {
//     try {
//       const { term_id, role_id, status_id } = req.query;

//       const data = await service.fetchReportData(
//         term_id ? parseInt(term_id as string) : null,
//         role_id ? parseInt(role_id as string) : null,
//         status_id ? parseInt(status_id as string) : null
//       );

//       res.json({ message: 'Report fetched successfully', data });
//     } catch (err) {
//       console.error('Error in ReportsController:', err);
//       res.status(500).json({ message: 'Failed to fetch report' });
//     }
//   }

  async exportPDF(req: Request, res: Response) {
    const { term_id, role_id, status_id } = req.query;
    await service.exportToPDF(
      res,
      term_id ? Number(term_id as string) : null,
      role_id ? Number(role_id as string) : null,
      status_id ? Number(status_id as string) : null
    );
  }

  async exportExcel(req: Request, res: Response) {
    const { term_id, role_id, status_id } = req.query;
    await service.exportToExcel(
      res,
      term_id ? Number(term_id as string) : null,
      role_id ? Number(role_id as string) : null,
      status_id ? Number(status_id as string) : null
    );
  }
}
