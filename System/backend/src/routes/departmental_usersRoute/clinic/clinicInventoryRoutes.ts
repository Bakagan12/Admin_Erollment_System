import { Router } from "express";
import { ClinicInventoryController } from "../../../controllers/departmental_usersController/clinic/ClinicInventoryController";
import { RequestController } from "../../../controllers/departmental_usersController/clinic/request/request_controller";
import { ReferalController } from "../../../controllers/departmental_usersController/clinic/referal/referal_controller";
import { ClinicLogsController } from "../../../controllers/departmental_usersController/clinic/incident-logs/clinic_logs_controller";
import { ClinicConditioningController } from "../../../controllers/departmental_usersController/clinic/health_record/clinicConditionController";

const router = Router();

router.get("/get", ClinicInventoryController.getAll);
router.post("/create", ClinicInventoryController.create);
router.put("/update/:id", ClinicInventoryController.update);
router.delete("/delete/:id", ClinicInventoryController.delete);
router.get("/find/:id", ClinicInventoryController.findById);

//REQUEST NI SIYA ! ! ! 
router.get("/req/get", RequestController.get);
router.post("/req/create", RequestController.create);
router.put("/req/update/:id", RequestController.update);
router.delete("/req/delete/:id", RequestController.delete);
router.get("/req/find/:id", RequestController.find);

//REFERAL NI SIYA ! ! !
router.get("/ref/get", ReferalController.get);
router.post("/ref/create", ReferalController.create);
router.put("/ref/update/:id", ReferalController.update);
router.delete("/ref/delete/:id", ReferalController.delete);
router.get("/ref/find/:id", ReferalController.find);


//CLINIC LOGS NI SIYA ! ! ! 
router.get("/log/get", ClinicLogsController.getAll);
router.post("/log/create", ClinicLogsController.create);
router.put("/log/update/:id", ClinicLogsController.update);
router.delete("/log/delete/:id", ClinicLogsController.delete);
router.get("/log/find", ClinicLogsController.find);

//CLINIC CONDITIONS NI SIYA ! ! !
router.get("/conditions/get", ClinicConditioningController.getAllConditions);
router.post("/conditions/create/:id", ClinicConditioningController.createCondition);
router.get("/conditions/find/:id", ClinicConditioningController.getConditionById);
router.put("/conditions/update/:id", ClinicConditioningController.updateCondition);
router.delete("/conditions/delete/:id", ClinicConditioningController.deleteCondition);

export default router;
