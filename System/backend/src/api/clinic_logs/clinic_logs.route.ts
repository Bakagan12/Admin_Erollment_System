import { Router } from "express";
import * as Controller from './clinic_logs.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/clinic_logs/', asyncHandler(Controller.get));
router.post('/clinic_logs/', asyncHandler(Controller.insert));
router.put('/clinic_logs/:id', asyncHandler(Controller.update));
router.delete('/clinic_logs/:id', asyncHandler(Controller.remove));

export default router;