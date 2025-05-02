// UserOnAdminController.create
import { Router } from "express";
import { UserOnAdminController } from "../../../controllers/adminController/user_and_role/user/userController";
const router = Router();

router.post('/user/create', UserOnAdminController.create);

export default router;