import { Router } from "express";
import * as Controller from './father.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/father/', asyncHandler(Controller.get));
router.post('/father/', asyncHandler(Controller.insert));
router.put('/father/:id', asyncHandler(Controller.update));
// router.delete('/father/:id', asyncHandler(Controller.remove));

export default router;