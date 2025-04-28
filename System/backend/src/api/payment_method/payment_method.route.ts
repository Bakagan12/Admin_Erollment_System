import { Router } from "express";
import * as Controller from './payment_method.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/payment_method/', asyncHandler(Controller.get));
router.post('/payment_method/', asyncHandler(Controller.insert));
router.put('/payment_method/:id', asyncHandler(Controller.update));
// router.delete('/payment/:id', asyncHandler(Controller.remove));

export default router;