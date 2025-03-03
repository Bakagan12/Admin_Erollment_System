
import { Router } from 'express';
import PaymentController from '../../controllers/request/paymentController';

const router: Router = Router();

// Route to create a payment method
router.post('/payment/create_payment_method', async (req, res, next) => {
  try {
    await PaymentController.createPaymentMethods(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
