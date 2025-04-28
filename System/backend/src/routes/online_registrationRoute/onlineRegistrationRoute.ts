import { Router } from 'express';
import {registerStudentController as online_register} from '../../controllers/onlineController/online_registrationController'

const router = Router();

router.post('/register', online_register);

export default router;
