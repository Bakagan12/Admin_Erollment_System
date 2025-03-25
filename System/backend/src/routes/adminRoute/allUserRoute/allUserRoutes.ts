import { Router } from "express";
import   {authenticateJWT} from "../../../middleware/AuthMiddleware";
import {fetchAllUsers,  createUserController,
    updateUserController,
    deleteUserController} from "../../../controllers/adminController/selectAllUserController/allUserController";

const router: Router = Router();

router.get('/get_all_user', fetchAllUsers );
router.post('/user/create', createUserController );
router.put('/user/update/:userId', updateUserController );
router.put('/user/delete/:userId', deleteUserController );

export default router;
