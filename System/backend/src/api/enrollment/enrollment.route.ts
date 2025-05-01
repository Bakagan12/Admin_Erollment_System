import { Router } from "express";
import * as Controller from './enrollment.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/enrollment/', asyncHandler(Controller.get));
router.post('/enrollment/', asyncHandler(Controller.insert));
router.put('/enrollment/:id', asyncHandler(Controller.update));
router.delete('/enrollment/:id', asyncHandler(Controller.remove));

export default router;