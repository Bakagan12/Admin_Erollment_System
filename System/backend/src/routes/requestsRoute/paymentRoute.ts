import { Router } from 'express';
import { PaymentController } from '../../controllers/requestController/paymentController';

const router = Router();
const secretKey = process.env.PAYMONGO_SECRET_KEY || 'sk_test_sxwmM4tDkWBMm1uy31WV8HEB';
const paymentController = new PaymentController(secretKey);

router.post('/payment_intents', (req, res) => paymentController.createPaymentIntent(req, res));
router.post('/payment_methods', (req, res) => paymentController.createPaymentMethod(req, res));
router.post('/attach_payment_intent', (req, res) => paymentController.attachToPaymentIntent(req, res));

export default router;