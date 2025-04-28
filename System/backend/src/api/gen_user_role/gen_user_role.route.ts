import { Router } from "express";
import * as Controller from './gen_user_role.controller';
// import errorHandler from "../utils/errorHandler";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get('/user-role/', asyncHandler(Controller.get));
router.post('/user-role/', asyncHandler(Controller.insert));
router.put('/user-role/:id', asyncHandler(Controller.update));
// router.delete('/user/:id', asyncHandler(Controller.remove));

export default router;