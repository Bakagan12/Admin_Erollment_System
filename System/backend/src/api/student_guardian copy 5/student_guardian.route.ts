import { Router } from "express";
import * as Controller from './student_guardian.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/student_guardian/', asyncHandler(Controller.get));
router.post('/student_guardian/', asyncHandler(Controller.insert));
router.put('/student_guardian/:id', asyncHandler(Controller.update));
// router.delete('/student_guardian/:id', asyncHandler(Controller.remove));

export default router;