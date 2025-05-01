import { Router } from "express";
import gen_user from './gen_users/gen_users.route';
import student from './students/students.route';
import person from './persons/persons.route';

const router = Router();

router.use('/gen_users', gen_user);
router.use('/students', student);
router.use('/persons', person);



export default router;