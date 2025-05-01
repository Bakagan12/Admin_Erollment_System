// backend/src/routes/emailRoute/emailRoute.ts
import express from 'express';

import { GenUser } from '../../models/genUser';
import { sendTestEmail, getUsernameByEmail } from '../../controllers/emailController/emailController';

const router = express.Router();

// POST route to send email
router.post('/send', sendTestEmail);
router.get('/get_username/:email', getUsernameByEmail);
export default router;
