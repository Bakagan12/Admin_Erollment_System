import { Router } from "express";
import * as Controller from './grade_levels.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/grade_levels/', asyncHandler(Controller.get));
router.post('/grade_levels/', asyncHandler(Controller.insert));
router.put('/grade_levels/:id', asyncHandler(Controller.update));
// router.delete('/father/:id', asyncHandler(Controller.remove));

export default router;