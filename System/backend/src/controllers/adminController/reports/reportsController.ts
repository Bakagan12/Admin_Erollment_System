import { Request, Response, NextFunction } from 'express';

import { ReportsService } from '../../../services/adminService/reports/reportsService';


export class ReportsController {
    static async getReports(req: Request, res: Response) {
        const { term_id, role_id, status_id } = req.query;

        try {
            // Parse the parameters to integers (if needed)
           const TermId = term_id ? Number(term_id) : null;
            const RoleId = role_id ? Number(role_id) : null;
            const StatusId = status_id ? Number(status_id) : null;

            const reports = await ReportsService.getReports(TermId, RoleId, StatusId);
            res.status(200).json(reports);
        } catch (err:unknown) {
           res.status(500).json({
            message: 'Error Generating departmental user',
            error: (err instanceof Error) ? err.message : err,
        });
        }
    }
}
