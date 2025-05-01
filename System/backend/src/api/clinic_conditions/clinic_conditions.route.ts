import { Router } from "express";
import * as Controller from './clinic_conditions.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/classification/', asyncHandler(Controller.get));
router.post('/classification/', asyncHandler(Controller.insert));
router.put('/classification/:id', asyncHandler(Controller.update));
router.delete('/classification/:id', asyncHandler(Controller.remove));

export default router;