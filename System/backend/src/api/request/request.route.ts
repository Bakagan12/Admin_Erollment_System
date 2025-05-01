import { Router } from "express";
import * as Controller from './request.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/request/', asyncHandler(Controller.get));
router.post('/request/', asyncHandler(Controller.insert));
router.put('/request/:id', asyncHandler(Controller.update));
router.delete('/request/:id', asyncHandler(Controller.remove));

export default router;