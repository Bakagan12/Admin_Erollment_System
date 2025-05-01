import { Router } from "express";
import { fetchAllSuffix } from "../../../controllers/adminController/suffixController/suffix";

const router: Router = Router();

router.get('/suffix', fetchAllSuffix);

export default router;