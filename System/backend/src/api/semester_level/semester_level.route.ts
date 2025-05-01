import { Router } from "express";
import * as Controller from './semester_level.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/', asyncHandler(Controller.get));
router.post('/', asyncHandler(Controller.insert));
router.put('/:id', asyncHandler(Controller.update));
router.delete('/:id', asyncHandler(Controller.remove));

export default router;