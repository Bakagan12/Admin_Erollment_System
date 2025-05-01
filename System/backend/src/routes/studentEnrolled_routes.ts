import { Router } from 'express';
import { StudentEnrolledController } from '../controllers/studentEnrolled_controller';

const router = Router();

// GET /api/reports/enrolled-students
router.get('/enrolled-students', StudentEnrolledController.getOnlineEnrolledStudents);
// /enrolled_students/enrolled-students
export default router;
