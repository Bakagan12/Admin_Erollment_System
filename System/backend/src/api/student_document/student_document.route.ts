import { Router } from "express";
import * as Controller from './student_document.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/student_document/', asyncHandler(Controller.get));
router.post('/student_document/', asyncHandler(Controller.insert));
router.put('/student_document/:id', asyncHandler(Controller.update));
// router.delete('/student_document/:id', asyncHandler(Controller.remove));

export default router;