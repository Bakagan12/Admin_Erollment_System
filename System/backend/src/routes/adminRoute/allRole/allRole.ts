// In your roles route file
import { Router } from "express";
import { authenticateJWT } from "../../../middleware/AuthMiddleware";
import { selectAllRolesController } from "../../../controllers/adminController/selectAllRolesController/selectAllRoleController";

const router: Router = Router();

router.get('/allRoles', selectAllRolesController);

export default router;
