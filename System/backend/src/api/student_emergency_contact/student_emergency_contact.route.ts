import { Router } from "express";
import * as Controller from './student_emergency_contact.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/student_emergency_contact/', asyncHandler(Controller.get));
router.post('/student_emergency_contact/', asyncHandler(Controller.insert));
router.put('/student_emergency_contact/:id', asyncHandler(Controller.update));
// router.delete('/student_emergency_contact/:id', asyncHandler(Controller.remove));

export default router;