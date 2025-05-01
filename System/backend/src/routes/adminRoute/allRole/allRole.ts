// In your roles route file
import { Router } from "express";
import { authenticateJWT } from "../../../middleware/AuthMiddleware";
import {deleteRoleController,  updateRoleController, selectAllRolesController, createRoleController } from "../../../controllers/adminController/selectAllRolesController/selectAllRoleController";

const router: Router = Router();

router.get('/allRoles', selectAllRolesController);
router.post('/role/create', createRoleController);
router.put('/role/update/:roleID', updateRoleController);
router.put('/role/delete/:roleID', deleteRoleController);

export default router;
