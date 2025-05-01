// routes/onlineApplyPending.routes.ts
import { Router } from 'express';
import { authenticateJWT } from '../../../middleware/AuthMiddleware';
import { OnlineApplyPendingController } from '../../../controllers/departmental_usersController/registrar/online_apply_pendingController';

const router = Router();

router.get('/students/pending', OnlineApplyPendingController.getPending);
router.get('/students/enrolled', OnlineApplyPendingController.getEnrolled);

export default router;
