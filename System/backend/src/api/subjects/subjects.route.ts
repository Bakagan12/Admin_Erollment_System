import { Router } from "express";
import * as Controller from './subjects.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/subjects/', asyncHandler(Controller.get));
router.post('/subjects/', asyncHandler(Controller.insert));
router.put('/subjects/:id', asyncHandler(Controller.update));
router.delete('/student_guardian/:id', asyncHandler(Controller.remove));

export default router;