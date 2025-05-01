import { Router } from "express";
import { authenticateJWT } from "../../../middleware/AuthMiddleware";
import { fetchAllStudents } from "../../../controllers/adminController/selectAllStudentController/allStudentController";

const router: Router = Router();

router.get('/get_all_students', fetchAllStudents);

export default router;