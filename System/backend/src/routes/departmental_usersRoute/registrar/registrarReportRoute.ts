import { Router } from "express";
import { RegistrarReportController } from "../../../controllers/departmental_usersController/registrar/registrarReportController";
import { ExportRegistrarReportService } from "../../../services/GenerateService/registrarReportService";

const router = Router();

router.get("/registrar/enrolled-students", RegistrarReportController.getEnrolledStudents);

// Exports
router.get("/registrar/export-pdf", ExportRegistrarReportService.exportToPDF);
router.get("/registrar/export-excel", ExportRegistrarReportService.exportToExcel);

export default router;
