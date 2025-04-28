import { Router } from "express";
import * as Controller from './payment.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/payment/', asyncHandler(Controller.get));
router.post('/payment/', asyncHandler(Controller.insert));
router.put('/payment/:id', asyncHandler(Controller.update));
router.delete('/payment/:id', asyncHandler(Controller.remove));

export default router;