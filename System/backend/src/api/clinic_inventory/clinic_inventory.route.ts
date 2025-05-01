import { Router } from "express";
import * as Controller from './clinic_inventory.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/clinic_inventory/', asyncHandler(Controller.get));
router.post('/clinic_inventory/', asyncHandler(Controller.insert));
router.put('/clinic_inventory/:id', asyncHandler(Controller.update));
router.delete('/clinic_inventory/:id', asyncHandler(Controller.remove));

export default router;