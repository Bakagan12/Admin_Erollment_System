import { Router } from "express";
import * as Controller from './clinic_medication_given.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/clinic_medication_given/', asyncHandler(Controller.get));
router.post('/clinic_medication_given/', asyncHandler(Controller.insert));
router.put('/clinic_medication_given/:id', asyncHandler(Controller.update));
// router.delete('/clinic_medication_given/:id', asyncHandler(Controller.remove));

export default router;