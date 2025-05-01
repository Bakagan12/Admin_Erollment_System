import { Router } from "express";
import { handleUpdateUserPassword } from "../../controllers/updatepassword/updatepasswordcontrollers";

const router = Router();

router.put("/update_password/:id", handleUpdateUserPassword);

export default router;
