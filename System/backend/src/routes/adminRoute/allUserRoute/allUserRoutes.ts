import { Router } from "express";
import   {authenticateJWT} from "../../../middleware/AuthMiddleware";
import {fetchAllUsers} from "../../../controllers/adminController/selectAllUserController/allUserController";

const router: Router = Router();

router.get('/get_all_user', fetchAllUsers );

export default router;
