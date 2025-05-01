import { Router } from "express";
import * as Controller from './status.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/status/', asyncHandler(Controller.get));
router.post('/status/', asyncHandler(Controller.insert));
router.put('/status/:id', asyncHandler(Controller.update));
// router.delete('/semester_level/:id', asyncHandler(Controller.remove));

export default router;