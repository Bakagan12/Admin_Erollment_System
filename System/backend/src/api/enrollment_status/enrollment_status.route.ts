import { Router } from "express";
import * as Controller from './enrollment_status.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/enrollment_status/', asyncHandler(Controller.get));
router.post('/enrollment_status/', asyncHandler(Controller.insert));
router.put('/enrollment_status/:id', asyncHandler(Controller.update));
router.delete('/enrollment_status/:id', asyncHandler(Controller.remove));

export default router;