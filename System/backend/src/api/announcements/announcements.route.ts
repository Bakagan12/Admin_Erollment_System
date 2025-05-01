import { Router } from "express";
import * as Controller from './announcements.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/announcements/', asyncHandler(Controller.get));
router.post('/announcements/', asyncHandler(Controller.insert));
router.put('/announcements/:id', asyncHandler(Controller.update));
router.delete('/announcements/:id', asyncHandler(Controller.remove));

export default router;