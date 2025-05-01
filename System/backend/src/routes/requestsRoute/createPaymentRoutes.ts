import { Router } from 'express';
import { CreatePaymentController } from '../../controllers/request/createPayment';

const router = Router();

// Route for creating payment intent
router.post('/create_payment_intent', CreatePaymentController.createPaymentIntent);

// Route for creating payment method
router.post('/create_payment_method', CreatePaymentController.createPaymentMethod);

// Route for attaching payment method to payment intent
router.post('/attach_payment_method', CreatePaymentController.attachPaymentMethod);

export default router;
