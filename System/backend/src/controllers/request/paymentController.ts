// controllers/request/paymentController.ts
import { Request, Response } from 'express';
import PaymentService from '../../services/requestService/paymentService';

class PaymentController {
  async createPaymentMethods(req: Request, res: Response): Promise<Response> {
    try {
      const { card_number, expiration_month, expiration_year, cvv } = req.body;
      const paymentData = {
        card_number,
        expiration_month,
        expiration_year,
        cvv,
      };

      const result = await PaymentService.createPaymentMethod(paymentData);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default new PaymentController();
