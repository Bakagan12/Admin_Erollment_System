import { Router } from "express";
import * as Controller from './advisers.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/advisers/user/', asyncHandler(Controller.get));
router.post('/advisers/', asyncHandler(Controller.insert));
router.put('/advisers/:id', asyncHandler(Controller.update));
// router.delete('/user/:id', asyncHandler(Controller.remove));

export default router;