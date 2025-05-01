import { reportsRepo } from "../../../repository/adminRepository/reports/reportsRepo";

export class ReportsService {
    static async getReports(term_id: number | null, role_id: number | null, status_id: number | null) {
        return await reportsRepo.getReports(term_id, role_id, status_id);
    }
}
