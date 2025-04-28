import { Router } from "express";
import * as Controller from './clinic_visits.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/clinic_visits/', asyncHandler(Controller.get));
router.post('/clinic_visits/', asyncHandler(Controller.insert));
router.put('/clinic_visits/:id', asyncHandler(Controller.update));
// router.delete('/clinic_visits/:id', asyncHandler(Controller.remove));

export default router;