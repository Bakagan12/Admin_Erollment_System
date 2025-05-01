import express from 'express';
import { ReportsController } from '../../controllers/GenerateController/generateReportOnAdminContrller';

const router = express.Router();
const controller = new ReportsController();

// router.get('/reports', controller.getFilteredReport.bind(controller));
router.get('/admin/reports/pdf', controller.exportPDF.bind(controller));
router.get('/admin/reports/excel', controller.exportExcel.bind(controller));

export default router;
